import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from 'react-router-dom';
import useMyContext from "../hooks/useMyContext";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";

const RoomDetails = () => {
    const { user } = useMyContext();
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [coming, setComing] = useState(true);
    const { type, img, price, reviews, description, discount, availability, room_size } = room;
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        // fetch(`http://localhost:5000/rooms/${id}`)
        //     .then(resp => resp.json())
        //     .then(data => {
        //         setRoom(data);
        //         setComing(false);
        //     })

        const f = async () => {
            const { data } = await axiosPublic.get(`/rooms/${id}`);
            // console.log(data);
            setRoom(data);
            setComing(false);
        };
        f();

    }, [id, axiosPublic]);
    const handleSubmit = e => {
        e.preventDefault();

        const from = e.target;

        const email = from.email.value;
        const date = from.date.value;
        console.log(email, date);

        //book room
        const b_price = discount || price;
        const booking = {
            email, roomId: id, date, price: b_price, description, img, type
        };
        // fetch('http://localhost:5000/bookings', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(booking)
        // }).then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     if (data?.insertedId) toast.success('Room Booked.');
        // });


        axiosPublic.post('/bookings', booking)
            .then(data => {
                console.log(data.data);
                if (data?.data?.insertedId) toast.success('Room Booked.');
            });

    };

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
                <div className="flex-1 mb-5">
                    <h1 className="text-4xl text-center md:text-start">{type}</h1>
                    <div className="flex flex-col md:flex-row md:gap-24 text-xl text-center md:text-start">
                        <p>Per day Price: ${price}</p>
                        <p className="text-secondary">{discount ? `*Discount Price: $${discount}*` : ""}</p>
                    </div>
                    <p className="text-xl text-center md:text-start">Availability: {availability !== false && "Available"}</p>
                    <p className="text-xl text-center md:text-start">Room Size: {room_size}</p>
                    <p className="text-2xl underline">Details: </p>
                    <p className="text-xl">{description}</p>
                    <div className="text-xl mt-5">
                        <p className="underline">Reviews: {reviews.length}</p>
                        {
                            reviews.length !== 0 ? <div>
                                {
                                    reviews?.map((idx, review) => <div key={idx}>
                                        <h3 className="text-xl">User: {review?.email}</h3>
                                        <h5 className="text-xl">Rating: {review?.rating}</h5>
                                        <p className="text-lg">Review: {review.comment}</p>
                                        <p className="text-lg">Time: {review?.time}</p>
                                    </div>)
                                }
                            </div> : <p className="text-secondary">No one reviewed.</p>
                        }
                    </div>
                </div>
                {/* img half */}
                <div className="flex-1">
                    <img className="rounded-lg" src={img} alt="" />
                </div>
            </div>
            {/* booking */}
            <div className="hero bg-base-100">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-200">
                        <div className="lg:text-left">
                            <h1 className="text-center text-5xl font-bold">Book now!</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="flex gap-5">
                                <div className="form-control">
                                    <label className="input-group input-group-vertical w-80">
                                        <span>Your Email</span>
                                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="input-group input-group-vertical w-80">
                                        <span>Date</span>
                                        <input type="date" name="date" className="input input-bordered" required />
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary w-fit mx-auto">Book</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RoomDetails;