import { Helmet } from "react-helmet-async";
import BookingCard from '../components/BookingCard';
import { useEffect, useState } from "react";
import useMyContext from "../hooks/useMyContext";
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

const MyBookings = () => {
    const { user } = useMyContext();
    const [bookings, setBookings] = useState();
    // const [totalPrice, setTotalPrice] = useState(0);
    const [coming, setComing] = useState(true);
    const axiosSecure = useSecureAxios();

    useEffect(() => {

        const f = async () => {
            const { data } = await axiosSecure.get(`/bookings?email=${user?.email}`);
            setBookings(data);
            // setTotalPrice(data?);
            setComing(false);
        }; f();

    }, [user, axiosSecure]);


    const handleDelete = (id, date) => {
        swal({//Confirming to cancel
            title: "Are you sure?",
            text: "Once Cancel, you have to Book it again!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            timer: 1500
        }).then((willDelete) => {
            if (willDelete) {
                if (willDelete) {
                    //checking cancellation time overed or not
                    if (dateDiff(date) > 1) { //not overed
                        // cancel booking
                        axiosSecure.delete(`bookings/${id}`)
                            .then(data => {
                                // console.log(data?.data);
                                if (data?.data.deletedCount) toast.success("Booking Canceled.");

                                //update bookings in website
                                const remaining = bookings.filter(booking => booking._id !== id);
                                setBookings(remaining);
                            });
                        //time overed
                    } else toast.error("Booking Cancellation Time Overed.");
                }
            }
        });

    }

    // console.log(totalPrice);
    //loading
    if (coming) return <span className="loading loading-bars loading-lg flex justify-center items-center mx-auto"></span>;

    // no bookings
    if (bookings?.length === 0) return <p className="text-center text-secondary text-2xl">No Booking</p>;

    return (
        <div>
            <Helmet>
                <title>My Bookings</title>
            </Helmet>
            <h1 className="text-4xl my-10 flex justify-between">
                <span className="underline">My Bookings: {bookings?.length}</span>
                <span className="text-primary underline">Total Price: ${bookings?.reduce((sum, booking) => sum += booking.price, 0)}</span>
            </h1>
            <div>{
                bookings?.map(booking => <BookingCard key={booking._id} booking={booking} handleDelete={handleDelete}></BookingCard>)
            }</div>
            <p className="text-primary underline my-3 text-right"></p>
        </div>
    );
};

export default MyBookings;