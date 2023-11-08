import useMyContext from "../hooks/useMyContext";
import { Helmet } from "react-helmet-async";

const profile = () => {
    const { user, loading } = useMyContext();

    if (loading) return <span className="loading loading-bars loading-lg flex justify-center items-center text-center"></span>;

    return (
        <div>
            <Helmet>
                <title>My Profile</title>
            </Helmet>
            <h1 className="text-4xl text-center underline">My Profile</h1>
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="lg:w-2/3 p-3 text-center flex flex-col justify-center items-center">
                    <h2 className="text-3xl md:text-4xl">Name: {user?.displayName}</h2>
                    <p className="text-2xl md:text-3xl">Email: {user?.email}</p>
                </div><img className="w-1/2 md:w-1/4 mx-auto my-5 rounded-lg" src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default profile;