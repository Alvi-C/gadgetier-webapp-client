import { Link } from 'react-router-dom'
import logo from '../../assets/gadgetier-logo.png'

const Navbar = () => {
	return (
		<div className='container-size'>
			<div className='navbar bg-base-100'>
				<div className='flex-1'>
					<img className='w-32 lg:w-40' src={logo} alt='' />
				</div>
				<div className='flex-none gap-2'>
					<div>
						<ul className='menu menu-horizontal px-1'>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/products'>Products</Link>
							</li>
							<li>
								<Link to='/login'>Login</Link>
							</li>
						</ul>
					</div>
					<div className='dropdown dropdown-end'>
						<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
							<div className='w-10 rounded-full'>
								<img
									alt='Tailwind CSS Navbar component'
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToR4tcDYkTzNIOlgx-rR8ElLCJN2SMHDgWEFNZB_hKWnCDVlARCmhNoJxjq3hxw2tUEAM&usqp=CAU'
								/>
							</div>
						</label>
						<ul
							tabIndex={0}
							className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
						>
							<li>
								<a className='justify-between'>
									Profile
									<span className='badge'>New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
