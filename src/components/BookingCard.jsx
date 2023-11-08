/* eslint-disable react/prop-types */

const BookingCard = ({ booking }) => {
    const { _id, type, img, date, price, description } = booking;
    
    return (
        <div className="card card-normal lg:card-side bg-base-100 shadow-xl">
            <figure className=" w-96 mx-auto lg:w-1/3 p-5"><img className="rounded-lg overflow-hidden" src={img} alt="Movie" /></figure>
            <div className="card-body w-96 mx-auto">
                <h2 className="card-title text-3xl">{type}</h2>
                <p className="">{description}</p>
                <p className="text-2xl">Booking Date: {date}</p>
                <p className="text-2xl">Price: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md">Update</button>
                    <button  className="btn btn-error btn-xs sm:btn-sm md:btn-md">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;