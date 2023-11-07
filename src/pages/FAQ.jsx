import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FAQ = () => {
    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);
    return (
        <div className="w-2/3 mx-auto mb-5">
            <h1 className="text-2xl lg:text-5xl text-center text-primary underline my-3">FAQ</h1>
            <div className="collapse bg-base-200" data-aos="slide-right">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-2xl font-medium">
                    1.  Can you provide information about local attractions and activities in the area?
                </div>
                <div className="collapse-content">
                    <p>Certainly, our concierge desk is happy to provide recommendations and arrange tours or activities in the area. We can help you explore the best local experiences, from museums to outdoor adventures.</p>
                </div>
            </div>
            <br />
            <div className="collapse bg-base-200" data-aos="slide-left">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-2xl font-medium">
                    2. What safety measures are in place to ensure the well-being of guests, especially regarding COVID-19?
                </div>
                <div className="collapse-content">
                    <p>What safety measures are in place to ensure the well-being of guests, especially regarding COVID-19?</p>
                </div>
            </div>
            <br />
            <div className="collapse bg-base-200" data-aos="slide-right">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-2xl font-medium">
                    3. Can I request special amenities or room preferences, such as specific bedding arrangements, in-room dining, or additional towels?
                </div>
                <div className="collapse-content">
                    <p>Absolutely, we welcome special requests. Please inform our reservations team at the time of booking, or let our front desk staff know upon check-in. We will do our best to accommodate your preferences.</p>
                </div>
            </div>
            <br />
            <div className="collapse bg-base-200" data-aos="slide-left">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-2xl font-medium">
                    4. What dining options are available at the hotel, and do you cater to dietary restrictions or preferences?
                </div>
                <div className="collapse-content">
                    <p>We have a variety of dining options, including our on-site restaurant, room service, and bar. We offer a diverse menu to cater to different dietary needs and preferences. Our chefs are ready to provide customized meals upon request.</p>
                </div>
            </div>
            <br />
            <div className="collapse bg-base-200" data-aos="slide-right">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-2xl font-medium">
                    5. Are there any additional fees or taxes that I should be aware of during my stay?
                </div>
                <div className="collapse-content">
                    <p>While the room rate covers most expenses, there may be additional fees or taxes, such as a daily resort fee, parking charges, or local taxes. We encourage guests to review their final bill at check-out for a breakdown of all charges.</p>
                </div>
            </div>
            <br />
            <div className="collapse bg-base-200" data-aos="slide-left">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-2xl font-medium">
                    6.  Are pets allowed in your hotel?
                </div>
                <div className="collapse-content">
                    <p>No, we apologize, but our hotel has a strict no-pet policy. This decision is in place to maintain a comfortable and allergen-free environment for all our guests, including those with allergies or sensitivities to pet dander. We can recommend nearby pet-friendly accommodations for your convenience.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;