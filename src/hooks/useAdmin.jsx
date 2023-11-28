/*
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useAdmin = () => {
	const { user, loading } = useAuth()
	console.log();
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

export default useAdmin */


import { useEffect, useState } from 'react'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'

const useAdmin = ()=> {
	const { user } = useAuth()
	const axiosSecure = useAxiosSecure()

	const [isAdmin, setIsAdmin] = useState(false)
	const [isAdminLoading, setIsAdminLoading] = useState(true)

	useEffect(() => {
		if (user?.email) {
			const fetchData = async () => {
				const res = await axiosSecure.get(`/users/admin/${user?.email}`)
				console.log(res.data);
				setIsAdmin(res.data?.admin)
				setIsAdminLoading(false)
			}
			fetchData()
		}
	}, [user?.email, axiosSecure])
	return [isAdmin, isAdminLoading]
}

export default useAdmin