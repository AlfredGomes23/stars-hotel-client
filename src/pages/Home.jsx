import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Newsletter from "../components/Newsletter";
import { Toaster } from "react-hot-toast"
import OfferBanner from "../components/OfferBanner";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                />
            </div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <OfferBanner></OfferBanner>
            <FeaturedRooms></FeaturedRooms>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;