

const ModProductReview = () => {
    return (
			<div className='min-h-screen bg-green-700'>
				<div className='flex justify-evenly mb-4'>
					<h2 className='text-3xl my-6 text-white font-bold'>
						Total product review request: 4
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
							<tr className='text-center text-slate-500'>
								<th>1</th>
								<td>Apple iPhone 15</td>
								<td>Amelia@dd.com</td>
								<td>
									<button className='badge badge-info text-xs text-white hover:bg-sky-600'>
										Check
									</button>
								</td>
								<td>
									<button className='badge badge-success text-xs text-white hover:bg-green-700'>
										Accept
									</button>
								</td>
								<td>
									<button className='badge bg-yellow-500 text-xs text-white hover:bg-yellow-700'>
										Featured
									</button>
								</td>
								<td>
									<button className='badge bg-red-500 text-xs text-white hover:bg-red-700'>
										Reject
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
};

export default ModProductReview;