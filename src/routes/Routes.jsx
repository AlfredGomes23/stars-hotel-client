import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import MyBookings from '../pages/MyBookings';
import FAQ from '../pages/FAQ';
import AboutUs from '../pages/AboutUs';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Rooms from '../pages/Rooms';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error404></Error404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/my-bookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
]);

export default routes;