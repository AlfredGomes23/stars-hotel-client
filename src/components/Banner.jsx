import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';


const Banner = () => {
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
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            {/* text */}
            <div className=' mx-auto rounded-lg overflow-hidden lg:h-[50vh] flex flex-col justify-center mb-10 px-10 text-center' data-aos="slide-right">
                <h3 className="text-xl mb-3 text-accent text-left">Welcome to,</h3>
                <h1 className='text-5xl text-primary mb-10'>Stars Hotel</h1>
                <p className='text-secondary text-3xl'>Experience the Perfect Blend of Luxury and Comfort at Our Hotel - Where Every Stay Feels Like Home</p>
            </div>
            {/* offer */}
            <div className='w-full mb-5 lg:mb-12 mx-auto rounded-lg overflow-hidden' data-aos="slide-left">
                <div className="mx-auto mb-5">
                    <div className="carousel w-full" data-aos="flip-right">
                        <div id="slide1" className="carousel-item relative w-full rounded-lg overflow-hidden ">
                            <img src={featureds[3]?.img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center ">
                                <a href="#slide4" className="btn btn-ghost text-4xl">❮</a>
                                <div className="lg:text-3xl w-1/2 mx-auto text-center bg-[#0000005a] p-2 lg:p-8 rounded-xl">
                                    <p className='text-accent'>{featureds[3]?.caption}</p>
                                    <p className='text-secondary font-bold text-4xl'>$ {featureds[3] ?.dis_price}</p>
                                    <button className="btn btn-primary  w-fit">Book Now</button>
                                </div>
                                <a href="#slide2" className="btn btn-ghost text-4xl">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full rounded-lg overflow-hidden">
                            <img src={featureds[1]?.img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
                                <a href="#slide1" className="btn btn-ghost text-white text-4xl">❮</a>
                                <div className="lg:text-3xl w-1/2 mx-auto text-center bg-[#0000005a] p-2 lg:p-8 rounded-xl">
                                    <p className='text-white'>{featureds[1]?.caption}</p>
                                    <p className='text-primary font-bold text-4xl'>$ {featureds[1]?.dis_price}</p>
                                    <button className="btn btn-secondary  w-fit">Book Now</button>
                                </div>
                                <a href="#slide3" className="btn btn-ghost text-white text-4xl">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full rounded-lg overflow-hidden">
                            <img src={featureds[2]?.img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
                                <a href="#slide2" className="btn btn-ghost text-4xl">❮</a>
                                <div className="lg:text-3xl w-1/2 mx-auto text-center bg-[#0000005a] p-2 lg:p-8 rounded-xl">
                                    <p className='text-accent'>{featureds[2]?.caption}</p>
                                    <p className='text-secondary font-bold text-4xl'>$ {featureds[2]?.dis_price}</p>
                                    <button className="btn btn-primary  w-fit">Book Now</button>
                                </div>
                                <a href="#slide4" className="btn btn-ghost text-4xl">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full rounded-lg overflow-hidden">
                            <img src={featureds[0]?.img} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
                                <a href="#slide3" className="btn btn-ghost text-white text-4xl">❮</a>
                                <div className="lg:text-3xl w-1/2 mx-auto text-center bg-[#0000005a] p-2 lg:p-8 rounded-xl">
                                    <p className='text-white'>{featureds[0]?.caption}</p>
                                    <p className='text-primary font-bold text-4xl'>$ {featureds[0]?.dis_price}</p>
                                    <button className="btn btn-secondary w-fit">Book Now</button>
                                </div>
                                <a href="#slide1" className="btn btn-ghost text-white text-4xl">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default Banner;