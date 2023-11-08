import { Helmet } from "react-helmet-async";
import RoomCard from '../components/RoomCard';
import { useEffect, useState } from "react";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [ coming, setComing] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(resp => resp.json())
            .then(data => {
                setRooms(data);
                setComing(false);
            });    
        }, [rooms]);

        if (coming) return <span className="loading loading-bars loading-lg flex justify-center items-center mx-auto"></span>;

        return (
        <div>
            <Helmet>
                <title>Rooms</title>
            </Helmet>
            <h1 className="text-center text-primary underline lg:text-4xl mb-10">Rooms in Hotel</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">{
                rooms?.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
            }</div>
        </div>
    );
};

export default Rooms;