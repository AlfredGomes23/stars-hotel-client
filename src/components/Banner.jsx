import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from '../../public/jan-canty-Ylrc7d5abME-unspfvlash.jpg';
import { useEffect } from 'react';


const Banner = () => {

    useEffect(() => {
        AOS.init({
            duration: 400
        });

    }, []);

    return (
        //parallax div
        <div className='rounded-lg overflow-hidden bg-fixed bg-cover bg-center h-[100vh] flex items-center mb-10' style={{ backgroundImage: `url(${bg})` }}>
            {/* text div */}
            <div className="mx-auto rounded-lg overflow-hidden h-fit flex flex-col justify-center px-5 w-1/2 text-center text-white bg-[#0000007a]" data-aos="slide-up">
                <h3 className="text-xl mb-3 text-left">Welcome to,</h3>
                <h1 className='text-5xl text-secondary mb-10'>Stars Hotel</h1>
                <p className='text-3xl'>Experience the Perfect Blend of Luxury and Comfort at Our Hotel - Where Every Stay Feels Like Home</p>
                <h2 className='text-xl my-3 text-accent font-bold'>*We pride ourselves on offering the best for our loyal and regular customers*</h2>
            </div>
        </div>);
};

export default Banner;