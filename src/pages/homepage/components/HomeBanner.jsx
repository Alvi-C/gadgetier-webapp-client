


const HomeBanner = () => {
    return (
			<div>
				<div
					className='relative bg-no-repeat bg-cover h-[40rem] bg-fixed'
					style={{
						backgroundImage: "url('https://i.ibb.co/LCRx7KC/bg2222-copy.jpg')",
					}}
				>
					<div className='absolute inset-x-0 bottom-0'>
						<svg
							viewBox='0 0 224 12'
							fill='currentColor'
							className='w-full lg:-mb-4 text-green-50'
							preserveAspectRatio='none'
						>
							<path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z'></path>
						</svg>
					</div>
					<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
						<div className='relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
							<h2 className='mb-6 font-sans text-7xl md:text-8xl text-center font-bold tracking-tight text-white sm:leading-none'>
								Do you have tech cravings?
							</h2>
							<p className='mb-6 text-center text-xl text-indigo-100 bg-black/70 px-2 py-1'>
								Find the tech products based on your needs with over 8,700+ real
								reviews.
							</p>

							<a
								href='/'
								aria-label='Scroll down'
								className='flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='12'
									height='12'
									viewBox='0 0 12 12'
									fill='currentColor'
								>
									<path d='M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z'></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		)
};

export default HomeBanner;

// className='w-full lg:-mb-4 text-white'