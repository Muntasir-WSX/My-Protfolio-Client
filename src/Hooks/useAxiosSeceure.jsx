import axios from "axios";
import { useNavigate } from "react-router"; 
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovier";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);

    // Request Interceptor: টোকেন পাঠানোর জন্য
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    // Response Interceptor: ৪Axios Error হ্যান্ডেল করার জন্য (401/403)
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
            await logOut();
            localStorage.removeItem('access-token'); // টোকেন মুছে ফেলা
            navigate('/signin');
        }
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;