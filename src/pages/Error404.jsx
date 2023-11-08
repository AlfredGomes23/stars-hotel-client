import { AiOutlineArrowLeft, AiTwotoneHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";

const Error404 = () => {
    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);
    return (
        <div>

            <Helmet>
                <title>Error 404</title>
            </Helmet>
            <Link to='/' className="btn-sm lg:btn-md btn mt-5 mb-5 md:mb-0 md:ml-5 btn-secondary">
                <AiOutlineArrowLeft></AiOutlineArrowLeft>
                <AiTwotoneHome className="text-xl"></AiTwotoneHome>
                <button>Home</button>
            </Link>
            <img className="lg:h-[50vh] mx-auto rounded-lg" src="https://i.ibb.co/Rvnr2Wb/error404.png" alt="" data-aos="slide-down" />

            <footer className="footer footer-center p-4 bg-base-300 text-base-content rounded-lg shadow-md mt-5 w-fit mx-auto mb-3" data-aos="slide-up">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Stars Hotel Ltd.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Error404;