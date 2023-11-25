import axios from 'axios'
import useMyContext from './useMyContext';
import { useNavigate } from 'react-router-dom';

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});
const useSecureAxios = () => {
    const { logOut } = useMyContext();
    const navigate = useNavigate();
    //request interceptor
    axiosSecure.interceptors.request.use(config => {
        // console.log(config);
        // console.log(localStorage.getItem('token'));
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
        return config
    }, error => {
        return Promise.reject(error);
    });

    //response interceptor for 401, 403
    axiosSecure.interceptors.response.use(response => response, async error => {
        const status = error?.response?.status;
        if (status === 401 || status === 403) {
            await logOut()
                .then(() => {
                    console.log("Logged OUT.");
                }).catch(err => {
                    console.log(err.message);
                });
            navigate('/login-register');
            console.log(error, status);
        }
        return Promise.reject(error);
    });
    return axiosSecure;
};

export default useSecureAxios;