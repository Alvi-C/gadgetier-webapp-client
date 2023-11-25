import { Link } from "react-router-dom";


const Footer = () => {
    return (
			<footer className='mt-20 xl:mt-32 mx-auto w-full relative text-center bg-green-50 text-green-700'>
				<div className='px-6 py-8 md:py-14 xl:pt-20 xl:pb-12'>
					<h2 className='font-bold text-3xl xl:text-4xl leading-snug'>
						Ready to get your customer&apos;s feedback?
						<br />
						Start your free trial today.
					</h2>
					<Link
						to='/signup'
						className='mt-8 px-12 py-5 text-lg font-medium text-white leading-tight inline-block bg-green-700 rounded-full shadow-xl border border-transparent hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2'
					>
						Get started
					</Link>
					<div className='mt-14 xl:mt-20'>
						<nav className='flex flex-wrap justify-center text-base font-medium'>
							<div className='px-5 py-2'>
								<Link to='/'>About</Link>
							</div>
							<div className='px-5 py-2'>
								<Link to='/'>Pricing</Link>
							</div>
							<div className='px-5 py-2'>
								<Link to='/'>Privacy & terms</Link>
							</div>
							<div className='px-5 py-2'>
								<Link to='/'>Contact</Link>
							</div>
						</nav>
						<p className='mt-7 text-base'>© 2023 Gadgetier, LLC</p>
					</div>
				</div>
			</footer>
		)
};

export default Footer;

