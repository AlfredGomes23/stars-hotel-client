
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className=' mx-auto rounded-lg overflow-hidden lg:h-[50vh] flex flex-col justify-center mb-10 px-10 text-center' data-aos="slide-right">
                <h3 className="text-xl mb-3 text-accent text-left">Welcome to,</h3>
                <h1 className='text-5xl text-primary mb-10'>Stars Hotel</h1>
                <p className='text-secondary text-3xl'>Experience the Perfect Blend of Luxury and Comfort at Our Hotel - Where Every Stay Feels Like Home</p>
            </div>
            <div className='w-full mb-5 lg:mb-12 mx-auto rounded-lg overflow-hidden' data-aos="slide-left">
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={3000}
                >
                    <div data-src="https://i.ibb.co/FmcfYpF/Education.png" />
                    <div data-src="https://i.ibb.co/FmcfYpF/Education.png" />
                    <div data-src="https://i.ibb.co/FmcfYpF/Education.png" />
                </AutoplaySlider></div>
        </div>);
};

export default Banner;