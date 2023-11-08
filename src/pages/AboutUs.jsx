import {Link} from 'react-router-dom'
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineLinkedin } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            {/* about us */}
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1">
                    <div className=" p-5">
                        <h2 className="text-xl md:text-3xl underline mb-1">About Us</h2>
                        <p className=" lg:text-xl">Welcome to STARS HOTEL, a sanctuary of luxury in the heart of Gazipur. Since 1992, we have been dedicated to exceeding your expectations with elegance, top-notch service, and unforgettable experiences.</p>
                    </div>
                    <div className=" p-5">
                        <h2 className="text-xl md:text-3xl underline mb-1">Our Commitment</h2>
                        <p className=" lg:text-xl">At Gazipur, we are committed to providing a haven of serenity, blending comfort and opulence to ensure your stay is nothing short of extraordinary.</p>
                    </div>
                    <div className=" p-5">
                        <h2 className="text-xl md:text-3xl underline mb-1">Your Memorable Stay Awaits</h2>
                        <p className=" lg:text-xl">At STARS HOTEL, we provide more than accommodations; we offer an experience. Whether for business or leisure, your journey with us is enriching and memorable. Discover the epitome of elegance. Book your stay today.</p>
                    </div>
                </div>
                <div className="flex-1">
                    <div className=" p-5">
                        <h2 className="text-xl md:text-3xl underline mb-1">The STARS HOTEL Experience</h2>
                        <ul className="space-y-1 lg:text-xl">
                            <li>* Luxury Accommodations: Our rooms and suites offer modern amenities, harmonious design, and breathtaking views.</li>
                            <li>* Culinary Excellence: Savor gourmet cuisine at our restaurants, ensuring a memorable dining experience.</li>
                            <li>* Wellness and Relaxation: Recharge your body and soul at our spa and wellness facilities.</li>
                            <li>* Impeccable Service: Our dedicated staff anticipates your needs, creating a warm and welcoming atmosphere.</li>
                        </ul>
                    </div>
                    <div className=" p-5">
                        <h2 className="text-xl md:text-3xl underline mb-1">Local Engagement and Culture</h2>
                        <p className=" lg:text-xl">We are deeply committed to our local community and culture. [Your Hotel Name] actively supports local businesses, artisans, and cultural events, offering guests an authentic and enriching experience.</p>
                    </div>
                </div>
            </div>
            {/* contact us */}
            <div className="flex flex-col md:flex-row p-3">
                <div className="lg:w-2/3">
                    <h2 className="text-xl md:text-3xl underline mb-1">Contact Us</h2>
                    <p className=" lg:text-xl">We are here to assist you and make your stay as seamless as possible. Feel free to get in touch with us if you have any questions, require information, or need assistance with your reservation. Our dedicated team is ready to provide you with the support you need.</p>
                </div>
                <ul className='flex flex-col p-3 justify-center mx-auto'>
                    <Link to='https://www.facebook.com/' className='flex gap-3 text-xl'>
                        <AiFillFacebook className='text-2xl'></AiFillFacebook> Facebook
                        </Link>
                    <Link to='https://twitter.com/' className='flex gap-3 text-xl'>
                        <AiFillTwitterCircle className='text-2xl'></AiFillTwitterCircle>
                        Twitter
                        </Link>
                    <Link to='https://linkedin.com/' className='flex gap-3 text-xl'>
                        <AiOutlineLinkedin className='text-2xl'></AiOutlineLinkedin>
                        LinkedIn
                        </Link>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;