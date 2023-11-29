import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';


const UserHome = () => {

	const { user } = useAuth()
	const displayUserFirstName = user?.displayName?.includes(' ')
		? user?.displayName.split(' ')[0]
		: user?.displayName

    return (
			<div className='min-h-screen flex items-center justify-center bg-green-700'>
				<div className='px-4'>
					<div className='text-center'>
						{/* <h1 className='text-3xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl font-title'></h1> */}
						<h2 className='block text-3xl font-extrabold tracking-tight text-yellow-200 sm:text-5xl md:text-6xl font-title'>
							Hello! {displayUserFirstName}
						</h2>
						<h3 className='block text-2xl font-extrabold tracking-tight text-gray-200 sm:text-3xl md:text-5xl font-title'>
							Welcome to Dashboard
						</h3>
						<h3 className='block text-2xl font-extrabold tracking-tight text-gray-200 sm:text-3xl md:text-4xl font-title pt-2'>
							Showcase your product
						</h3>
						<div className='max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8'>
							<div className='mt-3 sm:mt-0 sm:ml-3'>
								<Link
									to='/dashboard/user/addProduct'
									className='block shadow-lg w-full px-8 py-3 text-base font-medium text-gray-200 hover:text-gray-100 bg-gray-100/10 hover:bg-gray-200/30 hover:backdrop-blur-xl backdrop-blur-lg rounded-full md:py-4 md:text-lg md:px-10'
								>
									Add Product
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
};

export default UserHome;