import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Carousel } from "react-responsive-carousel";

const FeaturedRooms = () => {
    const [featured, setFeatured] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        AOS.init({
            duration: 400
        });

        const f = async () => {
            const { data } = await axiosPublic.get('/featured');
            // console.log(data);
            setFeatured(data)
        };
        f();
    }, [axiosPublic]);
    useEffect(() => {

    }, []);
    return (
        <div className=" mx-auto mb-5" data-aos="flip-up">
            <h1 className="text-2xl lg:text-5xl font-bold text-center mb-5">Our Featured Rooms</h1>
            {/* cards */}
            <Carousel autoPlay={true} infiniteLoop={true} className='h-fit mx-2 lg:mx-0'>
                {
                    featured?.map(room => <div key={room?._id} className=''>
                        <img src={room?.img} alt={room?.type} className='rounded-lg overflow-hidden h-[300px] lg:h-[600px] cover text-white' />
                        <div className="inset-0 m-auto absolute md:w-1/2 rounded-lg overflow-hidden bg-[#0000007a] p-3 md:p-5 lg:p-10 text-center text-white h-fit space-y-3">
                            <p className=' text-xl md:text-2xl'>{room?.type}</p>
                            <p>{room?.description}</p>
                            <button className="btn btn-accent btn-sm w-fit">Book Now</button>
                        </div>
                    </div>)
                }
            </Carousel>
        </div>
    );
};

export default FeaturedRooms;