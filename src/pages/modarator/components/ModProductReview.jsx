
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../../components/shared/Loading';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ModProductReview = () => {

	const axiosSecure = useAxiosSecure()
	const navigate = useNavigate()

	const {
		data: allProducts, isLoading, error, refetch} = useQuery({
		queryKey: ['allProducts'],
		queryFn: async () => {
			const res = await axiosSecure.get(`/allRequestProducts`)
			return res.data
		},
	})

	if (isLoading) {
		return <Loading/>
	}

	if (error) {
		return <div>An error occurred: {error.message}</div>
	}

	// console.log(allProducts);


	const handleCheckDetaits = (id) => {
		navigate(`/products/${id}`)
	}

	const handleAcceptBtn = async (id) => {
		const res = await axiosSecure.patch(`/acceptProduct/${id}`)
		if (res.data.result.modifiedCount > 0) {
			Swal.fire({
				title: 'Approved!',
				icon: 'success',
			})
			refetch()
		}

	}

	const handleCreateFeaturedBtn = async (id) => {
		const res = await axiosSecure.patch(`/createFeatured/${id}`)
		if (res.data?.result?.modifiedCount > 0) {
			Swal.fire({
				title: 'Item is featured now!',
				icon: 'success',
			})
			refetch()
		}
	}

	const handleCancelFeaturedBtn = async (id) => {
		const res = await axiosSecure.patch(`/cancelFeatured/${id}`)
		if (res.data?.result?.modifiedCount > 0) {
			Swal.fire({
				title: 'Item is Unfeatured now!',
				icon: 'success',
			})
			refetch()
		}
	}

	const handleRejectBtn = async (id) => {
		const res = await axiosSecure.patch(`/rejectProduct/${id}`)
		if (res.data?.result?.modifiedCount > 0) {
			Swal.fire({
				title: 'Rejected!',
				icon: 'success',
			})
			refetch()
		}
	}


    return (
			<div className='min-h-screen bg-green-700'>
				<div className='flex justify-evenly mb-4'>
					<h2 className='text-3xl my-6 text-white font-bold'>
						Total request: {allProducts.length}
					</h2>
				</div>
				<div className='container-size overflow-x-auto rounded-lg bg-white'>
					<table className='table'>
						{/* head */}
						<thead>
							<tr className='text-center text-slate-900'>
								<th>#</th>
								<th>Product</th>
								<th>User</th>
								<th>Details</th>
								<th>Accept</th>
								<th>Action</th>
								<th>Reject</th>
							</tr>
						</thead>
						<tbody>
							{allProducts.map((product, index) => (
								<tr key={product?._id} className='text-center text-slate-500'>
									<th>{index + 1}</th>
									<td>{product?.productName}</td>
									<td>{product?.email}</td>
									<td>
										<button
											onClick={() => handleCheckDetaits(product?._id)}
											className='badge badge-info text-xs text-white hover:bg-sky-600'
										>
											Check
										</button>
									</td>
									<td>
										{product?.status === 'approved' ? (
											<p className='badge bg-slate-300 text-xs text-black disabled'>
												Accepted
											</p>
										) : (
											<button
												onClick={() => handleAcceptBtn(product?._id)}
												className='badge badge-success text-xs text-white hover:bg-green-700'
											>
												Accept
											</button>
										)}
									</td>
									<td>
										{product?.featured === 'yes' ? (
											<button
												onClick={() => handleCancelFeaturedBtn(product?._id)}
												className='badge bg-slate-300 text-xs text-black hover:bg-red-500 hover:text-white'
											>
												Cancel Featured
											</button>
										) : (
											<button
												onClick={() => handleCreateFeaturedBtn(product?._id)}
												className='badge bg-yellow-500 text-xs text-white hover:bg-yellow-700'
											>
												Featured
											</button>
										)}
									</td>
									<td>
										{product?.status === 'rejected' ? (
											<p className='badge bg-rose-300 text-xs text-black disabled'>
												Rejected
											</p>
										) : (
											<button
												onClick={() => handleRejectBtn(product?._id)}
												className='badge bg-red-500 text-xs text-white hover:bg-red-700'
											>
												Reject
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

export default ModProductReview;