/* import useAuth from './useAuth'
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

export default useModerator */

import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";




const useModerator = () => {
	const { user } = useAuth()
	const axiosSecure = useAxiosSecure()

	const [isModerator, setIsModerator] = useState(false)
	const [isModeratorLoading, setIsModeratorLoading] = useState(true)

	useEffect(() => {
		if (user?.email) {
			const fetchData = async () => {
				const res = await axiosSecure.get(`/users/moderator/${user?.email}`)
				console.log(res.data);
				setIsModerator(res.data?.moderator)
				setIsModeratorLoading(false)
			}
			fetchData()
		}
	}, [user?.email, axiosSecure])
	return [isModerator, isModeratorLoading]
};

export default useModerator;