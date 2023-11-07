
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
            
        </div>);
};

export default Banner;