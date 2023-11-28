import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/gadgetier-logo.png'
import useAuth from '../../hooks/useAuth'
import { FaUser } from 'react-icons/fa'
import useAdmin from '../../hooks/useAdmin'
import useModerator from '../../hooks/useModerator'


const Navbar = () => {

	const { user, logOut } = useAuth()

	const displayUserFirstName = user?.displayName?.includes(' ')
		? user?.displayName.split(' ')[0]
		: user?.displayName

	const [isAdmin] = useAdmin()
	const [isModerator] = useModerator()

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch(error => {
				console.log(error)
			})
	}


	return (
		<div className='container-size'>
			<div className='navbar bg-base-100'>
				<Link to='/' className='flex-1'>
					<img className='w-32 lg:w-40' src={logo} alt='' />
				</Link>
				<div className='flex-none gap-2'>
					<div>
						<ul className='flex items-center space-x-3 md:space-x-6 text-base font-medium'>
							<li>
								<NavLink
									to='/'
									className={({ isActive }) =>
										isActive
											? 'text-xs md:text-base font-semibold leading-6 text-white bg-green-600 rounded-tl-2xl md:rounded-tl-full rounded-tr-2xl md:rounded-tr-full px-3 md:px-5 py-1'
											: 'text-xs md:text-base font-semibold leading-6 text-gray-800'
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/products'
									className={({ isActive }) =>
										isActive
											? 'text-xs md:text-base font-semibold leading-6 text-white bg-green-600 rounded-tl-2xl md:rounded-tl-full rounded-tr-2xl md:rounded-tr-full px-3 md:px-5 py-1'
											: 'text-xs md:text-base font-semibold leading-6 text-gray-700'
									}
								>
									Products
								</NavLink>
							</li>
							{!user?.email && (
								<li>
									<NavLink
										to='/login'
										className={({ isActive }) =>
											isActive
												? 'text-xs md:text-base font-semibold leading-6 text-white bg-green-600 rounded-tl-2xl md:rounded-tl-full rounded-tr-2xl md:rounded-tr-full px-3 md:px-5 py-1'
												: 'text-xs md:text-base font-semibold leading-6 text-gray-700'
										}
									>
										Login
									</NavLink>
								</li>
							)}
							{/* dropdown menu */}
							{user?.email && (
								<li>
									<div className='dropdown dropdown-end'>
										<label
											tabIndex={0}
											className='btn btn-ghost btn-circle avatar'
										>
											<div className='w-10 rounded-full'>
												<img alt='user-pic' src={user?.photoURL} />
											</div>
										</label>
										<ul
											tabIndex={0}
											className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
										>
											<li>
												<div
													className='disabled font-bold bg-slate-100 rounded-md'
													style={{ pointerEvents: 'none' }}
												>
													<FaUser />
													<p>{displayUserFirstName}</p>
												</div>
											</li>
											{user && isAdmin && (
												<li>
													<Link to='/dashboard/admin/adminHome'>
														Admin&apos;s Dashboard
													</Link>
												</li>
											)}
											{user && isModerator && (
												<li>
													<Link to='/dashboard/moderator/modHome'>
														Moderator&apos;s Dashboard
													</Link>
												</li>
											)}
											{user && !isAdmin && user && !isModerator && (
												<li>
													<Link to='/dashboard/user/userHome'>
														User&apos;s Dashboard
													</Link>
												</li>
											)}
											<li>
												<button onClick={handleLogOut}>Logout</button>
											</li>
										</ul>
									</div>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar





/*
<li>
											<Link to='/dashboard/user/userHome'>
												User&apos;s Dashboard
											</Link>
										</li>

*/

/*
	{user && isModerator && (
											<li>
												<Link to='/dashboard/admin/adminHome'>
													Moderator&apos;s Dashboard
												</Link>
											</li>
										)}

*/