import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);
    return (
        <footer>
            <div className="footer p-5 bg-base-300 mb-1 rounded-lg shadow-sm flex flex-col md:flex-row justify-center items-center" data-aos="slide-up">
                <aside className="mx-auto text-center">
                    <img className="w-24 mx-auto" src="https://i.ibb.co/BBDQrqN/logo.png" alt="" />
                    <p>Stars Hotel Ltd.<br />Providing reliable service since 1992</p>
                </aside>
                <div className="flex gap-5 link-primary text-md md:text-lg mx-auto">
                    <Link to="/">Home</Link>
                    <Link to="/rooms">Rooms</Link>
                    <Link to="/my-bookings">My Bookings</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/faq">FAQ</Link>
                </div>
            </div>
            <div className="footer footer-center p-1 bg-base-300 text-base-content rounded-lg shadow-md mb-3">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Stars Hotel Ltd.</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;