

const ModManageReport = () => {
    return (
			<div className='min-h-screen bg-green-700'>
				<div className='flex justify-evenly mb-4'>
					<h2 className='text-3xl my-6 text-white font-bold'>
						Total report: 4
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
							<tr className='text-center text-slate-500'>
								<td>1</td>
								<td>Apple iPhone 15</td>
								<td>
									<button className='badge badge-info text-xs text-white hover:bg-sky-600'>
										Check
									</button>
								</td>
								<td>
									<button className='badge bg-orange-500 text-xs text-white hover:bg-orange-600'>
										Cancel
									</button>
								</td>
								<td>
									<button className='badge bg-red-600 text-xs text-white hover:bg-red-700'>
										Delete
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
};

export default ModManageReport;