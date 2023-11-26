import { Link } from 'react-router-dom'
import logo from '../../assets/gadgetier-logo.png'

const ErrorPage = () => {
	return (
		<section className='px-4 py-32 mx-auto max-w-7xl'>
			<div className='w-full mx-auto lg:w-1/3'>
				<Link href='#' title='Hellonext Home Page'>
					<img src={logo} className='w-[15rem]' alt='logo' />
				</Link>
				<p className='mt-5 mb-3 text-xl font-bold text-black md:text-2xl'>
					Something went wrong!
				</p>
				<p className='mb-3 text-base font-medium text-gray-700'>
					The page you&apos;re looking for may have moved or no longer exists or
					it never been there or something is wrong. Head back to our{' '}
					<Link to='/' className='underline text-green-500'>
						homepage
					</Link>
				</p>
			</div>
		</section>
	)
}

export default ErrorPage
