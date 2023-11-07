import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Newsletter from "../components/Newsletter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Newsletter></Newsletter>
            <FeaturedRooms></FeaturedRooms>
        </div>
    );
};

export default Home;