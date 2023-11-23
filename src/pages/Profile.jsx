import useMyContext from "../hooks/useMyContext";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { user, loading } = useMyContext();
    const pro_pic = 'https://i.ibb.co/wNFzdmz/male-customer.jpg';

    if (loading) return <span className="loading loading-bars loading-lg flex justify-center items-center text-center"></span>;

    return (
        <div>
            <Helmet>
                <title>My Profile</title>
            </Helmet>
            <h1 className="text-4xl text-center underline">My Profile</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 p-3 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl">Name: {user?.displayName}</h2>
                    <p className="text-2xl md:text-3xl">Email: {user?.email}</p>
                </div>
                <img className="w-1/2 md:w-1/4 min-h-[256px] mx-auto my-5 rounded-lg" src={user?.photoURL || pro_pic} alt="" />
            </div>
        </div>
    );
};

export default Profile;