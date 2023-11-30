import { FaTrashAlt } from 'react-icons/fa'
import { RiFileEditFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
// import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'

const UserProductList = () => {
	const { user } = useAuth()
	const axiosSecure = useAxiosSecure()

	const {
		data: userProduct, isLoading, error, refetch} = useQuery({
		queryKey: ['userProduct', user?.email],
		queryFn: async () => {
			if (!user?.email) {
				throw new Error('User email is undefined')
			}
			const res = await axiosSecure.get(`/products/${user.email}`)
			return res.data
		},
		enabled: !!user?.email, // to ensures the query does not run until the email is available
	})

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>An error occurred: {error.message}</div>
	}

	const handleDeleteItem = product => {
		// console.log(product._id)
		Swal.fire({
			title: 'Do you want to delete this item?',
			text: 'Make sure',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#ff2500',
			cancelButtonColor: '#ffc04c',
			confirmButtonText: 'Yes, delete it!',
		}).then(async result => {
			// console.log(result)
			if (result.isConfirmed) {
				const res = await axiosSecure.delete(`/deleteProduct/${product?._id}`)
				// console.log(res.data.result.deletedCount)
				if (res.data?.result?.deletedCount > 0) {
					refetch()
					Swal.fire({
						title: 'Deleted!',
						text: `${product?.productName} has been deleted`,
						icon: 'success',
					})
				}
			}
		})
	}

	return (
		<div className='min-h-screen bg-green-700'>
			<div className='flex justify-evenly mb-4'>
				<h2 className='text-3xl my-6 text-white font-bold'>
					Your total products: {userProduct?.length}
				</h2>
			</div>
			<div className='container-size overflow-x-auto rounded-lg bg-white'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr className='text-center text-slate-900'>
							<th>#</th>
							<th>Name</th>
							<th>Up vote</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{userProduct?.map((product, index) => (
							<tr key={index} className='text-center text-slate-500'>
								<td>{index + 1}</td>
								<td>{product?.productName}</td>
								<td>{product?.upVote}</td>
								<td>
									<div
										className={`badge gap-2 text-xs text-white ${
											product?.status === 'approved'
												? 'badge-success'
												: 'badge-error'
										}`}
									>
										{product?.status}
									</div>
								</td>
								<td className='flex items-center justify-center'>
									<div className='flex items-center space-x-6'>
										<Link to={`/dashboard/user/updateProduct/${product?._id}`}>
											<button className='text-yellow-500 text-xl'>
												<RiFileEditFill />
											</button>
										</Link>
										<button
											onClick={() => handleDeleteItem(product)}
											className='text-red-600 text-base -mt-1.5'
										>
											<FaTrashAlt />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default UserProductList
