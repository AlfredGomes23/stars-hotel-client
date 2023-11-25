import { Link, NavLink } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";
import toast from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Navbar = () => {
    const { user, logOut } = useMyContext();
    // console.log(user);

    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Logged OUT.");
                toast.success("Logout Successful.");
            }).catch(err => {
                console.log(err.message);
            });
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/rooms'>Rooms</NavLink></li>
        <li><NavLink to='/my-bookings'>My Bookings</NavLink></li>
        <li><NavLink to='/about-us'>About Us</NavLink></li>
        <li><NavLink to='/faq'>FAQ</NavLink></li>
    </>
    return (
        <div className="navbar lg:mt-5 shadow-lg bg-base-300 rounded-lg mb-3" data-aos="slide-down">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-36">
                        {links}
                    </ul>
                </div>
                {/* logo */}
                <Link to='/' className="normal-case text-xl">
                    <img className="w-24" src="https://i.ibb.co/BBDQrqN/logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {/* profile dropdown */}
            <div className="navbar-end gap-3">
                {
                    user?.email &&
                    <Link to='/profile' className="avatar">
                        <div className="w-12 rounded-xl">
                            <img src={user?.photoURL} />
                        </div>
                    </Link>
                }
                {
                    user?.email ?
                        <button onClick={handleLogOut} className="btn btn-sm w-fit">Logout</button> :
                        <Link to='/login-register' className="btn btn-sm btn-primary">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;