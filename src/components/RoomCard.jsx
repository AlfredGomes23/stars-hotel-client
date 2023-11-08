/* eslint-disable react/prop-types */
import { Link} from 'react-router-dom'
const RoomCard = ({ room }) => {
    const { _id, type, img, reviews } = room
    
    // console.log(room);

    return (
        <Link to={`/rooms/${_id}`} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-60 rounded-lg overflow-hidden" src={img} alt={type} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{type}</h2>
                <p className='text-end text-lg'>Reviews: {reviews.length}</p>
            </div>
        </Link>
    );
};

export default RoomCard;