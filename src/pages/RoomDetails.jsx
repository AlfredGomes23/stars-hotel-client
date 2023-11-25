import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from 'react-router-dom';
import useMyContext from "../hooks/useMyContext";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import swal from 'sweetalert';
import useSecureAxios from "../hooks/useSecureAxios";
import Timestamp from 'react-timestamp';
import moment from 'moment';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


//get today's date
function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
}
//date difference ( booking date to today)
const dateDiff = (b_date) => {
    //get date in ms
    const date1 = new Date(getDate());
    const date2 = new Date(b_date);
    const timeDifference = date2 - date1; // Difference in milliseconds
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert to days
    return parseInt(daysDifference);
}

const RoomDetails = () => {
    const { user } = useMyContext();
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [checking, setChecking] = useState(false);
    const [coming, setComing] = useState(true);
    const [booked, setBooked] = useState(false);
    const [refetch, setRefetch] = useState(false);
    const { type, img, price, reviews, description, discount, availability, room_size } = room;
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useSecureAxios();
    // console.log(booked);

    //check booked
    const checkBooked = async () => {
        const { data } = await axiosSecure.get(`/isBooked?email=${user?.email}&roomId=${id}`)
        setBooked(data.isBooked);
    };
    coming && checkBooked();

    useEffect(() => {
        const f = async () => {
            const { data } = await axiosPublic.get(`/rooms/${id}`);
            // console.log(data);
            setRoom(data);
            setComing(false);
            setRefetch(false);
        }; f();
    }, [id, axiosPublic, refetch]);


    const handleSubmit = e => {
        e.preventDefault();
        setChecking(true);

        const from = e.target;

        const email = from.email.value;
        const date = from.date.value;

        //check past date
        if (dateDiff(date) < 1) {
            setChecking(false);
            return toast.error("Can Not Book For Past Date.");
        }

        //confirm booking
        swal({
            title: `You want to Book:
            ${type},
            Price: ${discount || price},
            Date: ${date}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
            timer: 5000
        })
            .then((willDelete) => {
                if (willDelete) {
                    //book room
                    const b_price = discount || price;
                    const booking = {
                        email, roomId: id, date, price: b_price, description, img, type
                    };
                    axiosSecure.post('/bookings', booking)
                        .then(data => {
                            // console.log(data.data);
                            if (data?.data?.insertedId) {
                                toast.success('Room Booked.');
                                checkBooked();
                            }
                            else if (data?.data?.unavailable) toast.error("Not Available For selected Date");
                            else toast.error("Error.");
                        });
                }
            });

        setChecking(false);

    };
    const handleReview = e => {
        e.preventDefault();

        if (!booked) return toast.error("You Can Post Review Only After Booking This Room.");

        const utcDate = moment.utc().format();
        const comment = e.target.comment.value;
        const rating = e.target.rating.value;
        console.log(rating);
        //rating check
        if(rating === 'rating') return toast.error("Require A Rating selection.");

        const review = { email: user?.email, comment, rating, date: utcDate };
        // console.log(review);

        //post review
        axiosSecure.post(`/review/${id}`, review)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success("Review Posted.");
                    setRefetch(true);
                }
            });
    }

    //loading data
    if (coming) return <span className="loading loading-bars loading-lg flex justify-center items-center mx-auto"></span>;

    return (
        <div>
            <Helmet>
                <title>Room-Details</title>
            </Helmet>
            {/* page contents */}
            <div className="flex flex-col lg:flex-row my-5 p-5">
                {/* details half */}
                <div className="flex-1 mb-5 p-5">
                    <h1 className="text-4xl text-center md:text-start">{type}</h1>
                    <div className="flex flex-col md:flex-row md:gap-24 text-xl text-center md:text-start">
                        <p>Per day Price: <span className="text-3xl">${price}</span></p>
                        <p className="text-secondary">{discount ? `*Discount Price: $${discount}*` : ""}</p>
                    </div>
                    <p className="text-xl text-center md:text-start">Availability: {availability !== false && "Available"}</p>
                    <p className="text-xl text-center md:text-start">Room Size: {room_size}</p>
                    <p className="text-2xl underline">Details: </p>
                    <p className="text-xl">{description}</p>
                </div>
                {/* img half */}
                <div className="flex-1">
                    <img className="rounded-lg" src={img} alt="" />
                </div>
            </div>
            {/* page bottom part */}
            <div className="flex flex-col lg:flex-row gap-5 items-center">
                {/* reviews */}
                <div className="text-xl lg:w-96">
                    <p className="underline mb-3 font-bold text-center text-2xl">Reviews: {reviews?.length}</p>
                    {
                        reviews.length !== 0 ? <Carousel autoPlay={true} infiniteLoop={true} className="h-fit w-96">
                            {
                                reviews?.map((review, idx) => <div key={idx} className="space-y-4 rounded-lg overflow-hidden bg-[#0000003a]">
                                    <img src="" alt="" />
                                    <h5 className="text-sm text-primary font-semibold">Rating: {review?.rating}</h5>
                                    <h3 className="text-sm text-secondary">{review?.email}</h3>
                                    <p className="text-xl text-accent">{`" ${review.comment} "`}</p>
                                    <small className="text-sm"><Timestamp date={review.date} /></small>
                                </div>)
                            }
                        </Carousel> : <p className="text-secondary">No one reviewed.</p>
                    }
                </div>
                {/* booking */}
                <div className="bg-base-100 w-4/5 lg:w-2/5 lg:order-last">
                    <h2 className="lg:text-left text-5xl font-bold flex justify-center">Book now!</h2>
                    <form onSubmit={handleSubmit} className=" flex  gap-5 flex-col mt-5">
                        <div className="flex gap-5 flex-col md:flex-row lg:flex-col items-center">
                            <div className="form-control w-full md:w-1/2 lg:w-2/3">
                                <label className="input-group input-group-vertical">
                                    <span>Your Email</span>
                                    <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" disabled />
                                </label>
                            </div>
                            <div className="form-control w-full md:w-1/2 lg:w-2/3">
                                <label className="input-group input-group-vertical">
                                    <span>Date</span>
                                    <input type="date" name="date" className="input input-bordered" required />
                                </label>
                            </div>
                        </div>
                        <div className="form-control mb-6">
                            {checking ? <button><span className="loading loading-spinner loading-lg text-secondary"></span></button>
                                : <button className="btn btn-secondary w-fit mx-auto">Book</button>}
                        </div>
                    </form>
                </div>
                {/* add review */}
                <form onSubmit={handleReview} className="join flex-col w-full gap-5 lg:w-96 px-10 mb-5">
                    <div className="text-2xl font-semibold text-primary text-center underline">Post Your Review</div>
                    <textarea className="textarea textarea-primary" name="comment" placeholder="your review..." rows='4' required></textarea>
                    <div className="flex justify-around ml-5">
                        <select className="select select-bordered join-item textarea-primary" name="rating" defaultValue="rating">
                            <option value='rating'>Rating</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        {
                            booked ?
                                <button className="btn btn-primary">Submit</button> :
                                <button disabled className="btn btn-primary">Submit</button>
                        }
                    </div>
                </form>
            </div>

        </div>
    );
};

export default RoomDetails;