import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {
    // interceptor token
    return axiosSecure;
};

export default useAxiosSecure;