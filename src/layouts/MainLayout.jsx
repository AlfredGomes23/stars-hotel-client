import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto font-inter">

                <Toaster
                    position="top-center"
                    reverseOrder={true}
                />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;