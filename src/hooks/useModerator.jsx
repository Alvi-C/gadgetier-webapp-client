import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useModerator = () => {
	const { user, loading } = useAuth()
	const axiosSecure = useAxiosSecure()

	const fetchData = async () => {
		const res = await axiosSecure.get(`/users/moderator/${user?.email}`)
		return res.data?.moderator
	}

	const { data: isModerator, isPending: isModeratorLoading } = useQuery({
		queryKey: ['isModerator', user?.email],
		enabled: !loading,
		queryFn: fetchData,
	})
	return [isModerator, isModeratorLoading]
}

export default useModerator
