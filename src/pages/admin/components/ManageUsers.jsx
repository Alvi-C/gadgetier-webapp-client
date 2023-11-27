

const ManageUsers = () => {
    return (
			<div className='min-h-screen bg-green-700'>
				<div className='flex justify-evenly mb-4'>
					<h2 className='text-3xl my-6 text-white font-bold'>
						Total users: 4
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
								<th>Make moderator</th>
								<th>Make admin</th>
							</tr>
						</thead>
						<tbody>
							<tr className='text-center text-slate-500'>
								<td>1</td>
								<td>Amelia</td>
								<td>Amelia@dd.com</td>
								<td>
									<button className='badge bg-purple-500 text-xs text-white hover:bg-purple-700'>
										Moderator
									</button>
								</td>
								<td>
									<button className='badge bg-yellow-500 text-xs text-white hover:bg-yellow-600'>
										Admin
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
};

export default ManageUsers;