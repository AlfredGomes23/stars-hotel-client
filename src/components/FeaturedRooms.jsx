import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedRooms = () => {
    const [featureds, setFeatureds] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 400
        });
        //getting imgs
        fetch('http://localhost:5000/featured-rooms')
            .then(resp => resp.json())
            .then(data => setFeatureds(data))
    }, []);
    useEffect(() => {

    }, []);
    return (
        <div className="lg:w-2/3 mx-auto mb-5">
            <h1 className="text-2xl lg:text-5xl text-center mb-5">Our Featured Rooms</h1>
            <div className="carousel w-full" data-aos="flip-right">
                <div id="slide1" className="carousel-item relative w-full rounded-lg overflow-hidden ">
                    <img src={featureds[0]?.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center ">
                        <a href="#slide4" className="btn btn-ghost text-4xl">❮</a>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <p className="lg:text-4xl w-1/2 mx-auto text-center text-white bg-[#0000005a] p-2 lg:p-8 rounded-xl">{featureds[0]?.description}</p>
                            <button className="btn btn-ghost btn-lg outline-double outline-primary text-secondary w-fit">Book Now</button>
                        </div>
                        <a href="#slide2" className="btn btn-ghost text-4xl">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full rounded-lg overflow-hidden">
                    <img src={featureds[1]?.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
                        <a href="#slide1" className="btn btn-ghost text-white text-4xl">❮</a>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <p className="lg:text-4xl w-1/2 mx-auto text-center text-white bg-[#0000005a] p-2 lg:p-8 rounded-xl">{featureds[1]?.description}</p>
                            <button className="btn btn-ghost btn-lg outline-double outline-primary text-secondary w-fit">Book Now</button>
                        </div>
                        <a href="#slide3" className="btn btn-ghost text-white text-4xl">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full rounded-lg overflow-hidden">
                    <img src={featureds[2]?.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
                        <a href="#slide2" className="btn btn-ghost text-4xl">❮</a>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <p className="lg:text-4xl w-1/2 mx-auto text-center text-white bg-[#0000005a] p-2 lg:p-8 rounded-xl">{featureds[2]?.description}</p>
                            <button className="btn btn-ghost btn-lg outline-double outline-primary text-secondary w-fit">Book Now</button>
                        </div>
                        <a href="#slide4" className="btn btn-ghost text-4xl">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full rounded-lg overflow-hidden">
                    <img src={featureds[3]?.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
                        <a href="#slide3" className="btn btn-ghost text-white text-4xl">❮</a>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <p className="lg:text-4xl w-1/2 mx-auto text-center text-white bg-[#0000005a] p-2 lg:p-8 rounded-xl">{featureds[3]?.description}</p>
                            <button className="btn btn-ghost btn-lg outline-double outline-primary text-secondary w-fit">Book Now</button>
                        </div>
                        <a href="#slide1" className="btn btn-ghost text-white text-4xl">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRooms;