
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../../components/shared/Loading';

const ManageUsers = () => {
	const axiosSecure = useAxiosSecure()


	const {
		data: allUsers,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ['allUsers'],
		queryFn: async () => {
			const res = await axiosSecure.get(`/users`)
			return res.data
		},
	})

	if (isLoading) {
		return <Loading />
	}

	if (error) {
		return <div>An error occurred: {error.message}</div>
	}

	// console.log(allUsers);

	const handleMakeModeratorBtn = async (id) => {
		const res = await axiosSecure.patch(`/makeModerator/${id}`)
		if (res.data?.result?.modifiedCount > 0) {
			refetch()
		}
	}

	const handleCancelModeratorBtn = async (id) => {
		const res = await axiosSecure.patch(`/cancelModerator/${id}`)
		if (res.data?.result?.modifiedCount > 0) {
			refetch()
		}
	}

	const handleMakeAdminBtn = async (id) => {
		const res = await axiosSecure.patch(`/makeAdmin/${id}`)
		if (res.data?.result?.modifiedCount > 0) {
			refetch()
		}
	}

	const handleCancelAdminBtn = async (id) => {
		const res = await axiosSecure.patch(`/cancelAdmin/${id}`)
		if (res.data?.result?.modifiedCount > 0) {
			refetch()
		}
	}


	return (
		<div className='min-h-screen bg-green-700'>
			<div className='flex justify-evenly mb-4'>
				<h2 className='text-3xl my-6 text-white font-bold'>
					Total users: {allUsers?.length}
				</h2>
			</div>
			<div className='container-size overflow-x-auto rounded-lg bg-white'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr className='text-center text-slate-900'>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Make moderator</th>
							<th>Make admin</th>
						</tr>
					</thead>
					<tbody>
						{allUsers.map((user, index) => (
							<tr key={index} className='text-center text-slate-500'>
								<td>{index + 1}</td>
								<td>{user?.name}</td>
								<td>{user?.email}</td>
								<td>{user?.role}</td>
								<td>
									{user?.role === 'moderator' ? (
										<button onClick={() => handleCancelModeratorBtn(user?._id)} className='badge bg-slate-300 text-xs text-black'>
											Cancel Moderator
										</button>
									) : (
										<button onClick={() => handleMakeModeratorBtn(user?._id)} className='badge bg-purple-500 text-xs text-white hover:bg-purple-700'>
											Moderator
										</button>
									)}
								</td>
								<td>
									{user?.role === 'admin' ? (
										<button onClick={() => handleCancelAdminBtn(user?._id)} className='badge bg-slate-300 text-xs text-black'>
											Cancel Admin
										</button>
									) : (
										<button onClick={() => handleMakeAdminBtn(user?._id)} className='badge bg-yellow-500 text-xs text-white hover:bg-yellow-600'>
											Make Admin
										</button>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
};

export default ManageUsers;