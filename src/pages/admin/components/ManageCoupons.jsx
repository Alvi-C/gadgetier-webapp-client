import { Link } from 'react-router-dom'

const ManageCoupons = () => {
	return (
		<div className='min-h-screen bg-green-700'>
			<div className='flex justify-evenly mb-4'>
				<h2 className='text-3xl my-6 text-white font-bold'>Total coupons: 4</h2>
			</div>
			<div className='container-size overflow-x-auto rounded-lg bg-white'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr className='text-center text-slate-900'>
							<th>#</th>
							<th>Coupon code</th>
							<th>Expiry date</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						<tr className='text-center text-slate-500'>
							<td>1</td>
							<td>HELLO</td>
							<td>2023-12-28</td>
							<td>
								<Link to='/dashboard/admin/updateCoupon'>
									<button className='badge bg-yellow-500 text-xs text-white hover:bg-yellow-600'>
										Edit
									</button>
								</Link>
							</td>
							<td>
								<button className='badge bg-red-500 text-xs text-white hover:bg-red-600'>
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ManageCoupons
