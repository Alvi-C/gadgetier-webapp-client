
import axios from 'axios'

const axiosPublic = axios.create({
	baseURL: 'https://gadegetier.vercel.app',
})


const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;