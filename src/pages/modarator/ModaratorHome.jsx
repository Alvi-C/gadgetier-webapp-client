import useAuth from "../../hooks/useAuth";


const ModaratorHome = () => {
	const { user } = useAuth()
	const displayUserFirstName = user?.displayName?.includes(' ')
		? user?.displayName.split(' ')[0]
		: user?.displayName
    return (
			<div className='min-h-screen flex items-center justify-center bg-green-700'>
				<div className='px-4'>
					<div className='text-center'>
						<h2 className='block text-3xl font-extrabold tracking-tight text-yellow-200 sm:text-5xl md:text-6xl font-title'>
							Hello! {displayUserFirstName}
						</h2>
						<h3 className='block text-2xl font-extrabold tracking-tight text-gray-200 sm:text-3xl md:text-5xl font-title'>
							Review product & Check report
						</h3>
					</div>
				</div>
			</div>
		)
};

export default ModaratorHome;