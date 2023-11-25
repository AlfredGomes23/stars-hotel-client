import axios from 'axios'

export const axiosPublic = axios.create({
    baseURL: 'https://sever-stars-hotel.vercel.app',
    withCredentials:true
});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;