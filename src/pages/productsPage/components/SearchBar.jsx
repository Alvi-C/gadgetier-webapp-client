

const SearchBar = () => {
    return (
			<div className='relative overflow-hidden'>
				<div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24'>
					<div className='text-center'>
						<h1 className='text-4xl sm:text-6xl font-bold text-gray-800'>
							Learn from feedback<br/> Share your feedback
						</h1>

						<p className='mt-3 text-gray-600'>
							Know about the product for your needs. Choose the product that
							fits your preferences.
						</p>

						<div className='mt-7 sm:mt-12 mx-auto max-w-xl'>
							<div>
								<div className='relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100'>
									<div className='flex-[1_0_0%]'>
										<label
											htmlFor='hs-search-article-1'
											className='block text-sm text-gray-700 font-medium'
										>
											<span className='sr-only'>Search with tag</span>
										</label>
										<input
											type='text'
											name='search'
											className='py-2.5 px-4 block w-full border-transparent rounded-lg outline-none ring-slate-600 focus:ring-1 focus:border-green-500 focus:ring-green-500'
											placeholder='Search using tag'
										/>
									</div>
									<div className='flex-[0_0_auto]'>
										<button className='w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												fill='currentColor'
												viewBox='0 0 16 16'
											>
												<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className='mt-5'>
							<ul className='flex space-x-3 text-slate-400 items-center justify-center'>
								<li>tags:</li>
								<li>#tag</li>
								<li>#tag</li>
								<li>#tag</li>
								<li>#tag</li>
								<li>#tag</li>
								<li>#tag</li>
								<li>#tag</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
};

export default SearchBar;

