import logo from '../../assets/gadgetier-logo.png'
import { Link } from 'react-router-dom'


const Signup = () => {
	return (
		<section className='grid grid-cols-1 gap-0 lg:grid-cols-12'>
			<div className='w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-8 xl:p-12 md:w-2/4'>
				<Link href='/' className='flex items-center justify-start'>
					<img className='w-40' src={logo} alt='logo' />
				</Link>
				<h1 className='mt-6 mb-4 text-xl font-bold text-left text-gray-800'>
					Create your account
				</h1>
				<form className='pb-1 space-y-4'>
					<div className='block border-b-2 pb-2 focus-within:border-emerald-600'>
						<label className='block mb-1 text-sm font-medium text-slate-500'>
							Your Name:
						</label>
						<input
							className='border-none text-slate-700 bg-transparent outline-none placeholder:text-xs placeholder:text-slate-400 focus:outline-none pt-2'
							type='text'
							placeholder='name'
						/>
					</div>
					<div className='block border-b-2 pb-2 focus-within:border-emerald-600'>
						<label className='block mb-1 text-sm font-medium text-slate-500'>
							Your Image:
						</label>
						{/* <input
                            type="file"
                            className="block w-full cursor-pointer appearance-none rounded-l-md bg-white px-3 py-2 text-sm transition focus:z-10 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                        /> */}
						<input
							className='border-none text-slate-700 bg-transparent outline-none placeholder:text-xs placeholder:text-slate-400 focus:outline-none pt-2'
							type='text'
							placeholder='your image url'
						/>
					</div>
					<div className='block border-b-2 pb-2 focus-within:border-emerald-600'>
						<label className='block mb-1 text-sm font-medium text-slate-500'>
							Your email:
						</label>
						<input
							className='border-none text-slate-700 bg-transparent outline-none placeholder:text-xs placeholder:text-slate-400 focus:outline-none pt-2'
							type='email'
							placeholder='email'
						/>
					</div>
					<div className='block border-b-2 pb-2 focus-within:border-emerald-600'>
						<label className='block mb-1 text-sm font-medium text-slate-500'>
							Your Password:
						</label>
						<input
							className='border-none text-slate-700 bg-transparent outline-none placeholder:text-xs placeholder:text-slate-400 focus:outline-none pt-2'
							type='password'
							placeholder='password'
						/>
					</div>

					<div>
						<input
							type='submit'
							className='bg-green-600 px-5 py-1.5 text-sm rounded-md font-medium text-white'
							value='Create Account'
						/>
					</div>
				</form>
				<div className='my-6 space-y-2'>
					<p className='text-xs text-gray-600'>
						Already have an account?
						<Link
							to='/login'
							className='text-emerald-600 font-medium hover:text-black ml-1'
						>
							Login from here
						</Link>
					</p>
					<a href='#' className='block text-xs text-slate-400 hover:text-black'>
						Privacy & Terms
					</a>
				</div>
			</div>
			<div className='col-span-1 lg:col-span-4'>
				<img
					src='https://img.freepik.com/free-photo/metaverse-concept-collage-design_23-2149419859.jpg?w=1380&t=st=1701108699~exp=1701109299~hmac=98549736f2544fd8b4e7db2a05bbccc1e3bafb3db5003be97cfa24bdce4281b2'
					alt='3 women looking at a laptop'
					className='object-cover w-full h-64 min-h-full bg-gray-100'
					loading='lazy'
				/>
			</div>
		</section>
	)
}

export default Signup
