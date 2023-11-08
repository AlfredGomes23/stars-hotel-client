import { Helmet } from "react-helmet-async";
import BookingCard from '../components/BookingCard';

const MyBookings = () => {
    return (
        <div>
            <Helmet>
                <title>My Bookings</title>
            </Helmet>
            my bookings
            <BookingCard></BookingCard>
        </div>
    );
};

export default MyBookings;