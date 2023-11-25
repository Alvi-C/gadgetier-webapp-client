

const SocialLogin = () => {
	return (
		<div>
			<button className='w-full flex justify-center py-2 border gap-2 border-slate-200 rounded-lg text-slate-500 hover:border-slate-300 hover:text-slate-600 hover:shadow transition duration-150'>
				<img
					className='w-6 h-6'
					src='https://www.svgrepo.com/show/475656/google-color.svg'
					loading='lazy'
					alt='google logo'
				/>
				<span>Login with Google</span>
			</button>
		</div>
	)
}

export default SocialLogin

