import { Helmet } from "react-helmet-async";
import RoomCard from '../components/RoomCard';
import { useEffect, useState } from "react";

const Rooms = () => {
    const [ rooms, setRooms ] = useState([]);
    const [ coming, setComing ] = useState(true);
    const [ sort, setSort ] = useState(false);

    const handleSort = () => {
        setSort(!sort)
    };
    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(resp => resp.json())
            .then(data => {
                sort ? setRooms(data.sort((a, b) => a?.price - b?.price)):
                setRooms(data);
                setComing(false);
            });
    }, [sort]);
    
    
    console.log(rooms);
    

    //loading
    if (coming) return <span className="loading loading-bars loading-lg flex justify-center items-center mx-auto"></span>;

    return (
        <div>
            <Helmet>
                <title>Rooms</title>
            </Helmet>
            <div className="flex text-center mt-20">
                <h1 className="flex-1 text-2xl md:text-3xl text-primary underline lg:text-4xl mb-10">Rooms in Hotel </h1>
                <p className="text-lg underline">Sort by:
                <span onClick={handleSort} className="btn btn-accent mr-2">{sort? "Default" : "Price"}</span></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">{
                rooms?.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
            }</div>
        </div>
    );
};

export default Rooms;