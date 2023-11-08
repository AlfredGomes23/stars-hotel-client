/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
const RoomCard = ({ room }) => {
    const { _id, type, img, reviews, price } = room

    // console.log(room);

    return (
        <Link to={`/rooms/${_id}`} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-60 rounded-lg overflow-hidden" src={img} alt={type} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{type}</h2>
                <div className='flex justify-between'>
                    <p className='text-xl text-secondary'>${price}<span className='text-sm text-neutral-focus'> per Day</span> </p>
                    <p className='text-lg text-end'>Reviews: {reviews.length}</p>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;