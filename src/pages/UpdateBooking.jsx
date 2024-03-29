import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from 'react-router-dom';
import toast from "react-hot-toast";
import swal from 'sweetalert';
import useSecureAxios from "../hooks/useSecureAxios";


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

const UpdateBooking = () => {
    const { id: b_id } = useParams();
    const [booking, setBooking] = useState({});
    const [checking, setChecking] = useState(false);
    const [update, setUpdate] = useState(false);
    const [coming, setComing] = useState(true);
    const axiosSecure = useSecureAxios();

    useEffect(() => {

        const f = async () => {
            const { data } = await axiosSecure.get(`/booking/${b_id}`);
            // console.log(data);
            setBooking(data);
            setComing(false);
            setUpdate(false)
        }; f();
    }, [b_id, axiosSecure, update]);


    const handleSubmit = e => {
        e.preventDefault();
        setChecking(true);

        const newDate = e.target.date.value;

        //same date
        if(newDate === booking.date){
            setChecking(false);
            return toast.error(`Already Booked for This Date`);
        }
        //check past date
        if (dateDiff(newDate) < 1) {
            setChecking(false);
            return toast.error(`This room is Already Booked for ${newDate}`);
        }
        // confirm update
        swal({
            title: "Are you sure?",
            text: `Update Booking Date To ${newDate}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    //patch
                    axiosSecure.patch(`/update/${b_id}`, { newDate, roomId: booking?.roomId })
                        .then(data => {
                            // console.log(data?.data);
                            if (data?.data?.modifiedCount) {
                                //update page data
                                setUpdate(true);
                                toast.success('Booking Updated.');
                            }
                            else if (data?.data?.unavailable) toast.error("Not Available For selected Date");
                            else toast.error("Error.");
                        });
                }
            });

        setChecking(false);
    };

    //loading data
    if (coming) return <span className="loading loading-bars loading-lg flex justify-center items-center mx-auto"></span>;

    return (
        <div className="">
            <Helmet>
                <title>Update Booking</title>
            </Helmet>
            {/* page contents */}
            <div className="card bg-base-100 shadow-xl mx-5 lg:w-2/3 h-[80vh] text-white bg-cover lg:mx-auto bg-fixed bg-center" style={{ backgroundImage: `url(${booking?.img})` }}>
                {/* <figure><img src={} alt={booking?.type} /></figure> */}
                <div className="bg-[#0000007a] p-3 w-fit absolute m-auto h-fit  rounded-lg inset-x-0 bottom-5 text-center">
                    <h2 className="card-title text-2xl">{booking?.type}</h2>
                    <p className="font-semibold">Booked Date: {booking?.date}</p>
                </div>
            </div>
            {/* update */}
            <div className="bg-base-200 flex-col lg:w-1/2 mx-auto my-10 shadow-2xl pb-5 rounded-lg">
                <div className=" flex-shrink-0 w-full">
                    <h1 className="text-center text-3xl lg:text-5xl font-bold mb-5">Update Date now!</h1>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-around w-2/3 mx-auto">
                    <div className="form-control">
                        <label className="input-group input-group-vertical w-80">
                            <span>Date</span>
                            <input type="date" name="date" className="input input-bordered" required />
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        {checking ? <button><span className="loading loading-spinner loading-lg text-primary"></span></button>
                            : <button className="btn btn-primary w-fit mx-auto">Update</button>}
                    </div>
                </form>
            </div>
        </div>

    );
};

export default UpdateBooking;