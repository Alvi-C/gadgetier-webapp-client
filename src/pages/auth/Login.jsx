import { Link } from 'react-router-dom'
import logo from '../../assets/gadgetier-logo.png'
import { useState } from 'react'
import SocialLogin from './components/SocialLogin'

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	return (
		<section className='grid grid-cols-1 gap-0 lg:grid-cols-12'>
			<div className='w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-8 xl:p-12 md:w-2/4'>
				<Link
					to='/'
					className='flex items-center justify-start'
				>
					<img className='w-40' src={logo} alt='logo' />
				</Link>
				<h1 className='mt-6 mb-4 text-xl font-bold text-left text-gray-800'>
					Log in to your account
				</h1>
				<div className='my-6'>
					<SocialLogin />
					<div className='divider mt-7 text-sm'>or</div>
				</div>
				<form className='pb-1 space-y-4'>
					<div className='block border-b-2 pb-2 focus-within:border-emerald-600'>
						<label className='block mb-1 text-sm font-medium text-slate-500'>
							Your email:
						</label>
						<input
							className='border-none text-slate-700 bg-transparent outline-none placeholder:text-xs placeholder:text-slate-400 focus:outline-none pt-2'
							type='email'
							placeholder='your registered email'
						/>
					</div>
					<div className='block border-b-2 pb-2 focus-within:border-emerald-600'>
						<label className='block mb-1 text-sm font-medium text-slate-500'>
							Your Password:
						</label>
						<input
							className='border-none text-slate-700 bg-transparent outline-none placeholder:text-xs placeholder:text-slate-400 focus:outline-none pt-2'
							type={showPassword ? 'text' : 'password'}
							placeholder='password'
						/>
					</div>

					<div className='flex items-center justify-between'>
						<label className='flex items-center'>
							<input
								onChange={togglePasswordVisibility}
								type='checkbox'
								className='form-checkbox accent-green-400'
							/>
							<span className='block ml-2 text-xs font-medium text-gray-700 cursor-pointer'>
								Show password
							</span>
						</label>
					</div>
					<div>
						<input
							type='submit'
							className='bg-green-600 px-5 py-1.5 text-sm rounded-md font-medium text-white'
							value='Login'
						/>
					</div>
				</form>
				<div className='my-6 space-y-2'>
					<p className='text-xs text-gray-600'>
						Don&apos;t have an account?
						<Link
							to='/signup'
							className='text-emerald-600 font-medium hover:text-black ml-1'
						>
							Create an account
						</Link>
					</p>
					<a
						href='#'
						className='block text-xs text-slate-400 hover:text-black'
					>
						Privacy & Terms
					</a>
				</div>
			</div>
			<div className='col-span-1 lg:col-span-4'>
				<img
					src='https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
					alt='3 women looking at a laptop'
					className='object-cover w-full h-64 min-h-full bg-gray-100'
					loading='lazy'
				/>
			</div>
		</section>
	)
}

export default Login
