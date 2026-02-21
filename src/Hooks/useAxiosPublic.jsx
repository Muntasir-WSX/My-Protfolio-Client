import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://my-portfolio-backend-mu-eight.vercel.app/' 
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;