import { Helmet } from "react-helmet-async";
import BookingCard from '../components/BookingCard';
import { useEffect, useState } from "react";
import useMyContext from "../hooks/useMyContext";
import toast from "react-hot-toast";
import swal from 'sweetalert';


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
            })
    }, [user]);
    const handleUpdate = () => {
        //
    };
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
                if (willDelete) {
                    if (willDelete) {
                        fetch(`http://localhost:5000/bookings/${id}`, {
                            method: "DELETE"
                        })
                            .then(resp => resp.json())
                            .then(data => {
                                console.log(data);
                                if (data.deletedCount) toast.error("Deleted.");
                                const remaining = bookings.filter(booking => booking._id !== id);
                                setBookings(remaining);
                            })
                    }
                } else {
                    toast.success("Cancel.");
                }
            });

    }

    //loading
    if (coming) return <span className="loading loading-bars loading-lg flex justify-center items-center mx-auto"></span>;

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