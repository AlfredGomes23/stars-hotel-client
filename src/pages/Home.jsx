import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Newsletter from "../components/Newsletter";
import { Toaster } from "react-hot-toast"
import OfferBanner from "../components/OfferBanner";

const Home = () => {
    return (
        <div>
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                />
            </div>
            <Banner></Banner>
            <OfferBanner></OfferBanner>
            <FeaturedRooms></FeaturedRooms>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;