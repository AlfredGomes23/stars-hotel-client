import useMyContext from "../hooks/useMyContext";
import {Navigate, useLocation} from 'react-router-dom'



// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useMyContext();
    const location = useLocation();
    // console.log(user);

    if (loading) return <span className="loading loading-bars loading-lg flex justify-center items-center text-center"></span>;
    if(user?.email) return children;

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;