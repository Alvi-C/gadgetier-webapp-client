import { FaTrashAlt } from 'react-icons/fa'
import { RiFileEditFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const UserProductList = () => {
	return (
		<div className='min-h-screen bg-green-700'>
			<div className='flex justify-evenly mb-4'>
				<h2 className='text-3xl my-6 text-white font-bold'>
					Your total products: 4
				</h2>
			</div>
			<div className='container-size overflow-x-auto rounded-lg bg-white'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr className='text-center text-slate-900'>
							<th>#</th>
							<th>Name</th>
							<th>Votes</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr className='text-center text-slate-500'>
							<td>1</td>
							<td>Samsung galaxy</td>
							<td>12</td>
							<td>
								<div className='badge badge-success gap-2 text-xs text-white'>
									Accepted
								</div>
								<div className='badge badge-error gap-2 text-xs text-white'>
									Rejected
								</div>
							</td>
							<td className='flex items-center justify-center'>
								<div className='flex items-center space-x-6'>
									<Link to='/dashboard/user/updateProduct/1'>
										<button className='text-yellow-500 text-xl'>
											<RiFileEditFill />
										</button>
									</Link>
									<button className='text-red-600 text-base -mt-1.5'>
										<FaTrashAlt />
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default UserProductList
