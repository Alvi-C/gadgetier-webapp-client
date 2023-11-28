
import axios from 'axios'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'

const axiosSecure = axios.create({
	baseURL: 'http://localhost:8000',
})

const useAxiosSecure = () => {
	const { logOut } = useAuth()
	const navigate = useNavigate()

	// request interceptor to add authorization header for every secure call to the api
	axiosSecure.interceptors.request.use(
		config => {
			const token = localStorage.getItem('access-token')
			// console.log('request stopped by interceptors:' + token);
			if (token) {
				config.headers.authorization = `Bearer ${token}`
			}
			return config
		},
		error => {
			return Promise.reject(error)
		}
	)

	// response interceptor for 401 and 403 status
	axiosSecure.interceptors.response.use(
		response => {
			return response
		},
		async error => {
			if (error?.response?.status === 401 || error?.response?.status === 403) {
				await logOut()
				navigate('/login')
			}
			return Promise.reject(error)
		}
	)

	return axiosSecure
}

export default useAxiosSecure