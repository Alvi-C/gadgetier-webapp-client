import { Link } from "react-router-dom";


const UserHome = () => {
    return (
			<div className='min-h-screen flex items-center justify-center bg-green-700'>
				<div className='px-4'>
					<div className='text-center'>
						<h1 className='text-3xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl font-title'>
							<span className='block'>Hi! Welcome to Dashboard</span>
							<span className='block pt-2'>Showcase your product</span>
						</h1>
						<p className='max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
							Learn - Receive - Understand - Provide
						</p>
						<div className='max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8'>
							<div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
								<Link
									to='/dashboard/user/addProduct'
									className='block shadow-lg w-full px-8 py-3 text-base font-medium text-gray-200 hover:text-gray-100 bg-gray-100/10 hover:bg-gray-200/30 hover:backdrop-blur-xl backdrop-blur-lg rounded-md md:py-4 md:text-lg md:px-10'
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