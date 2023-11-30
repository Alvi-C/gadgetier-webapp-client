
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/shared/Loading';
import Swal from 'sweetalert2';

const ModManageReport = () => {

	const axiosSecure = useAxiosSecure()
	const navigate = useNavigate()

	const {
		data: allReportedProducts,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ['allReportedProducts'],
		queryFn: async () => {
			const res = await axiosSecure.get(`/allReportedProducts`)
			return res.data
		},
	})

	if (isLoading) {
		return <Loading />
	}

	if (error) {
		return <div>An error occurred: {error.message}</div>
	}

	// console.log(allProducts);

	const handleCheckDetaits = id => {
		navigate(`/products/${id}`)
	}

	const handleCancelReportBtn = async (id) => {
		const res = await axiosSecure.patch(`/cancelReport/${id}`)
		if (res.data?.result?.modifiedCount > 0) {
			Swal.fire({
				title: 'Product report canceled!',
				icon: 'success',
			})
			refetch()
		}
	}

	const handleDeleteBtn = async (id) => {
		const res = await axiosSecure.delete(`/deleteReportedProduct/${id}`)
		// console.log(res.data);
		if (res.data?.result?.deletedCount > 0) {
			Swal.fire({
				title: 'Product deleted!',
				icon: 'success',
			})
			refetch()
		}
	}

    return (
			<div className='min-h-screen bg-green-700'>
				<div className='flex justify-evenly mb-4'>
					<h2 className='text-3xl my-6 text-white font-bold'>
						Total report: {allReportedProducts?.length}
					</h2>
				</div>
				<div className='container-size overflow-x-auto rounded-lg bg-white'>
					<table className='table'>
						{/* head */}
						<thead>
							<tr className='text-center text-slate-900'>
								<th>#</th>
								<th>Product</th>
								<th>Details</th>
								<th>Cancel</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{allReportedProducts.map((product, index) => (
								<tr key={product?._id} className='text-center text-slate-500'>
									<td>{index + 1}</td>
									<td>{product?.productName}</td>
									<td>
										<button onClick={() => handleCheckDetaits(product?._id)} className='badge badge-info text-xs text-white hover:bg-sky-600'>
											Check
										</button>
									</td>
									<td>
										<button onClick={() => handleCancelReportBtn(product?._id)} className='badge bg-orange-500 text-xs text-white hover:bg-orange-600'>
											Cancel report
										</button>
									</td>
									<td>
										<button onClick={() => handleDeleteBtn(product?._id)} className='badge bg-red-600 text-xs text-white hover:bg-red-700'>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		)
};

export default ModManageReport;