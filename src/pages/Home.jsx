import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Newsletter from "../components/Newsletter";
import { Helmet } from "react-helmet-async";
import OfferBanner from "../components/OfferBanner";
import { Toaster } from "react-hot-toast";

const Home = () => {
    return (
        <div >
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
            <Helmet>
                <title>Home</title>
            </Helmet>
            <OfferBanner></OfferBanner>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;