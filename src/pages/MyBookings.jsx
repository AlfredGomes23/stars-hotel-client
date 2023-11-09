import { Helmet } from "react-helmet-async";
import BookingCard from '../components/BookingCard';
import { useEffect, useState } from "react";
import useMyContext from "../hooks/useMyContext";
import toast from "react-hot-toast";
import swal from 'sweetalert';

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
    const [coming, setComing] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(resp => resp.json())
            .then(data => {
                setBookings(data);
                setComing(false);
            });
    }, [user]);

    const handleUpdate = () => {
        //
    };
    const handleDelete = (id, date) => {
        swal({//Confirming to cancel
            title: "Are you sure?",
            text: "Once Cancel, you have to Book it again!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                if (willDelete) {
                    //checking cancellation time overed or not
                    if (dateDiff(date) > 1) { //not overed
                        // cancel booking
                        fetch(`http://localhost:5000/bookings/${id}`, {
                            method: "DELETE"
                        })
                            .then(resp => resp.json())
                            .then(data => {
                                console.log(data);
                                if (data.deletedCount) toast.success("Booking Canceled.");

                                //update bookings in website
                                const remaining = bookings.filter(booking => booking._id !== id);
                                setBookings(remaining);
                            })
                            //time overed
                    }else toast.error("Booking Cancellation Time Overed.");
                }
            }
            // else {
            //     toast.success("Exit Cancellation.");
            // }
        });

    }

    //loading
    if (coming) return <span className="loading loading-bars loading-lg flex justify-center items-center mx-auto"></span>;
    // no bookings
    if (bookings.length === 0) return <p className="text-center text-secondary text-2xl">No Booking</p>;


    return (
        <div>
            <Helmet>
                <title>My Bookings</title>
            </Helmet>
            <h1 className="text-4xl my-10 underline">My Bookings</h1>
            <div>{
                bookings?.map(booking => <BookingCard key={booking._id} booking={booking} handleDelete={handleDelete} handleUpdate={handleUpdate}></BookingCard>)
            }</div>
        </div>
    );
};

export default MyBookings;