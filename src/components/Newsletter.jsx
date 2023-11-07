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
        <div className="hero min-h-screen">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100" data-aos="flip-left">
                    <form className="card-body">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Newsletter</h1>
                            <p className="py-6 text-xl">Stay in the Know! Subscribe to Our Newsletter for Exclusive Offers, Travel Tips, and Hotel Updates. Be the First to Receive Special Deals and Exciting News Straight to Your Inbox. Join our community of savvy travelers today!</p>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span>Your Email</span>
                                <input type="text" placeholder="Email address..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;