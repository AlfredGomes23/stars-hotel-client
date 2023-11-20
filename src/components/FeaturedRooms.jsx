import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAxiosPublic from "../hooks/useAxiosPublic";

const FeaturedRooms = () => {
    const [featured, setFeatured] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        AOS.init({
            duration: 400
        });
        //getting featured rooms
        // fetch('http://localhost:5000/featured')
        //     .then(resp => resp.json())
        //     .then(data => setFeatured(data))

        const f = async () => {
            const { data } = await axiosPublic.get('/discounts');
            // console.log(data);
            setFeatured(data)
        };
        f();
    }, [axiosPublic]);
    useEffect(() => {

    }, []);
    return (
        <div className="lg:w-2/3 mx-auto mb-5">
            <h1 className="text-2xl lg:text-5xl text-center mb-5">Our Featured Rooms</h1>
            <div className="carousel w-full" data-aos="flip-right">
                <div id="slideF1" className="carousel-item relative w-full rounded-lg overflow-hidden h-[70vh]">
                    <img src={featured[0]?.img} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center ">
                        <a href="#slideF4" className="btn btn-ghost text-4xl">❮</a>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <p className="lg:text-2xl md:w-1/2 mx-auto text-center text-white bg-[#0000005a] p-2 lg:p-8 rounded-xl">{featured[0]?.description}</p>
                            <button className="btn btn-ghost lg:lg:btn-lg outline-double outline-primary text-secondary w-fit">Book Now</button>
                        </div>
                        <a href="#slideF2" className="btn btn-ghost text-4xl">❯</a>
                    </div>
                </div>
                <div id="slideF2" className="carousel-item relative w-full rounded-lg overflow-hidden h-[70vh]">
                    <img src={featured[1]?.img} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
                        <a href="#slideF1" className="btn btn-ghost text-white text-4xl">❮</a>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <p className="lg:text-2xl md:w-1/2 mx-auto text-center text-white bg-[#0000005a] p-2 lg:p-8 rounded-xl">{featured[1]?.description}</p>
                            <button className="btn btn-ghost lg:btn-lg outline-double outline-primary text-secondary w-fit">Book Now</button>
                        </div>
                        <a href="#slideF3" className="btn btn-ghost text-white text-4xl">❯</a>
                    </div>
                </div>
                <div id="slideF3" className="carousel-item relative w-full rounded-lg overflow-hidden h-[70vh]">
                    <img src={featured[2]?.img} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
                        <a href="#slideF2" className="btn btn-ghost text-4xl">❮</a>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <p className="lg:text-2xl md:w-1/2  mx-auto text-center text-white bg-[#0000005a] p-2 lg:p-8 rounded-xl">{featured[2]?.description}</p>
                            <button className="btn btn-ghost lg:btn-lg outline-double outline-primary text-secondary w-fit">Book Now</button>
                        </div>
                        <a href="#slideF4" className="btn btn-ghost text-4xl">❯</a>
                    </div>
                </div>
                <div id="slideF4" className="carousel-item relative w-full rounded-lg overflow-hidden h-[70vh]">
                    <img src={featured[3]?.img} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
                        <a href="#slideF3" className="btn btn-ghost text-white text-4xl">❮</a>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <p className="lg:text-2xl md:w-1/2 mx-auto text-center text-white bg-[#0000005a] p-2 lg:p-8 rounded-xl">{featured[3]?.description}</p>
                            <button className="btn btn-ghost lg:btn-lg outline-double outline-primary text-secondary w-fit">Book Now</button>
                        </div>
                        <a href="#slideF1" className="btn btn-ghost text-white text-4xl">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRooms;