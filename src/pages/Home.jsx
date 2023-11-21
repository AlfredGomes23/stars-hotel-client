import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Newsletter from "../components/Newsletter";
import { Helmet } from "react-helmet-async";
import OfferBanner from "../components/OfferBanner";

const Home = () => {
    return (
        <div >
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