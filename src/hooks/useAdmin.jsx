
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useAdmin = () => {
	const { user, loading } = useAuth()
	const axiosSecure = useAxiosSecure()

	const fetchData = async () => {
		const res = await axiosSecure.get(`/users/admin/${user?.email}`)
		return res.data?.admin
	}

	const { data: isAdmin, isPending: isAdminLoading } = useQuery({
		queryKey: ['isAdmin', user?.email],
		enabled: !loading,
		queryFn: fetchData,
	})
	return [isAdmin, isAdminLoading]
}

export default useAdmin