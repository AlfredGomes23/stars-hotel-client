import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FcGoogle, FcHome } from "react-icons/fc";
import { Link } from 'react-router-dom';
import useMyContext from '../hooks/useMyContext';

const LoginRegister = () => {
    
    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };
    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, url, email, password);
    };
    const googleLogin = () => {

    };

    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);

    return (
        <div>
            <div className="flex flex-col md:flex-row bg-gradient-to-r from-accent to-primary">
                {/* login */}
                <div className="hero min-h-screen p-5 " data-aos="slide-left">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <p className="font-bold">Have an account?</p>
                            <h1 className="text-5xl font-bold">Login here</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-5">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input type="email"
                                        name="email"
                                        placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label mx-auto">
                                        <a href="#" className="label-text-alt link link-hover link-primary underline">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent w-fit mx-auto">Login</button>
                                </div>
                            </form>
                            <div onClick={() => googleLogin()} className='flex justify-center items-center btn'>
                                <p className='text-xl block  mr-1'>Login With</p>
                                <FcGoogle className='text-5xl'></FcGoogle>
                            </div>
                        </div>
                    </div>
                </div>
                {/* register */}
                <div className="hero min-h-screen" data-aos="slide-right">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left text-neutral-content">
                            <p className="font-bold">New here?</p>
                            <h1 className="text-5xl font-bold">Register now</h1>
                        </div>
                        <div className="card flex-shrink-0  w-fit shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                {/* name url */}
                                <div className="flex flex-col lg:flex-row gap-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Your Name</span>
                                        </label>
                                        <input type="text"
                                            name="name"
                                            placeholder="Your Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Photo URL</span>
                                        </label>
                                        <input type="text"
                                            name="url"
                                            placeholder="Photo URL" className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* email password */}
                                <div className="flex flex-col lg:flex-row gap-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <input type="email"
                                            name="email"
                                            placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Password</span>
                                        </label>
                                        <input type="password"
                                            name="password" placeholder="password" className="input input-bordered" required />
                                    </div>
                                </div>
                                <label className="label mx-auto">
                                    <input type="checkbox" name="checkbox" id="" required />
                                    <p className="label-text-alt link link-hover ml-2 text-secondary">Accept our terms and conditions</p>
                                </label>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary w-fit mx-auto">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="btm-nav bg-gradient-to-r from-accent to-primary">
                <Link to='/' className='pb-10'><p className='btn btn-ghost text-5xl'><FcHome></FcHome></p></Link>
            </div>
        </div>
    );
};

export default LoginRegister;