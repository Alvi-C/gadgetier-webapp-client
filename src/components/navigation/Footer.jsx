import { Link } from "react-router-dom";
import PrimaryButton from "../shared/PrimaryButton";


const Footer = () => {
    return (
			<footer className='w-full relative text-center bg-green-50 text-green-700'>
				<div className='px-6 py-8 md:py-14 xl:pt-20'>
					<h2 className='font-bold text-3xl xl:text-4xl'>
						<span className='text-black'>
							Ready to know what your customers says?
						</span>
						<br />
						<span>Start your free trial today.</span>
					</h2>
					<Link to='/signup'>
						<PrimaryButton title='Get Started' />
					</Link>
					<div className='mt-14'>
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

