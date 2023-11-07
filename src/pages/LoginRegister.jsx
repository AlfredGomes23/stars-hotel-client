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
            
        </div>
    );
};

export default LoginRegister;