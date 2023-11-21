import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './OfferBanner.css';


const OfferBanner = () => {
    const [discounts, setDiscounts] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        AOS.init({
            duration: 400
        });

        const f = async () => {
            const { data } = await axiosPublic.get('/discounts');
            // console.log(data);
            setDiscounts(data)
        };
        f();

    }, [axiosPublic]);


    return (
        <div className='rounded-lg overflow-hidden max-w-3xl mx-auto p-5 lg:p-0' data-aos="slide-up">
            <Carousel autoPlay={true} infiniteLoop={true} className='h-fit px-2 md:p-0'>
                {
                    discounts?.map(room => <div key={room?._id} className=''>
                        <img src={room?.img} alt={room?.type} className='rounded-lg overflow-hidden h-64 md:h-80 lg:h-96 cover text-white' />
                        <div className="myLegend w-2/3 h-fit space-y-3">
                            <p className=' text-xl md:text-2xl w-48'>{room?.caption}</p>
                            <p className=' font-bold md:text-4xl'>$ {room?.discount}</p>
                            <button className="btn btn-secondary btn-sm md:btn-md w-fit">Book Now</button>
                        </div>
                    </div>)
                }
            </Carousel>
        </div>);
};

export default OfferBanner;