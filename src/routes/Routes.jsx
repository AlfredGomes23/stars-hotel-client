import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import MyBookings from '../pages/MyBookings';
import FAQ from '../pages/FAQ';
import AboutUs from '../pages/AboutUs';
import Rooms from '../pages/Rooms';
import LoginRegister from '../pages/LoginRegister';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error404></Error404>,
        children: [
            {
                index:true,
                element: <Home></Home>
            },
            {
                path: 'rooms',
                element: <Rooms></Rooms>
            },
            {
                path: 'my-bookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: 'about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'faq',
                element: <FAQ></FAQ>
            }
        ]
    },
    {
        path: '/login-register',
        element: <LoginRegister></LoginRegister>
    }
]);

export default routes;