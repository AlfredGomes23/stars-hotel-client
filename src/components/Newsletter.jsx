import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Newsletter = () => {
    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);
    return (
        <div className="min-h-min my-10 flex-shrink-0 w-full shadow-2xl bg-base-100 h-fit flex flex-col md:flex-row gap-5 rounded-xl" data-aos="flip-left">
            <div className="text-center md:w-2/3">
                <h1 className="text-3xl lg:text-5xl font-bold">Newsletter</h1>
                <p className="py-6 text-xl">Stay in the Know! Subscribe to Our Newsletter for Exclusive Offers, Travel Tips, and Hotel Updates. Be the First to Receive Special Deals and Exciting News Straight to Your Inbox. Join our community of savvy travelers today!</p>
            </div>
            <form className="form-control md:w-1/3 px-5">
                <label className="input-group input-group-vertical">
                    <span>Your Email</span>
                    <input type="text" placeholder="Email address..." className="input input-bordered" />
                </label>
                <button className="btn btn-primary mt-5 w-fit mx-auto mb-5">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;