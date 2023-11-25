

const TrendingProductCard = () => {
    return (
			<div>
				<img
					src='https://thegadgetflow.com/wp-content/uploads/2020/12/Couchmaster-CYCON-Gaming-Lapdesk-0001.jpg'
					className='w-full mb-4 rounded-lg shadow-none transition-shadow duration-500 ease-in-out group-hover:shadow-lg'
					alt='laravel9-1646792144.jpg'
				/>
				<div className='flex items-center mb-3 justify-between'>
					<span className='px-2 py-0.5 rounded-full text-xs font-bold leading-5 text-white mr-2 bg-green-500'>
						News
					</span>
					<div className='flex items-center justify-between text-sm text-gray-600 fill-current'>
						<div className='flex items-center'>
							<button className='flex items-center hover:bg-green-100 p-1 rounded-md'>
								<img
									className='w-5 h-5 -mt-1'
									src='https://img.icons8.com/retro/32/thumb-up.png'
									alt='external-like-feedback-kmg-design-glyph-kmg-design'
								/>
								<span className='ml-1'>20</span>
							</button>
							<button className='flex items-center hover:bg-red-100 p-1 ml-1 rounded-md'>
								<img
									className='w-5 h-5 mt-1'
									src='https://img.icons8.com/retro/32/thumbs-down.png'
									alt='external-dislike-feedback-kmg-design-glyph-kmg-design'
								/>
								<span className='ml-1'>10</span>
							</button>
						</div>
					</div>
				</div>
				<p className='font-display max-w-sm text-base md:text-xl lg:text-base font-bold leading-tight'>
					<span className='link-underline link-underline-black text-black'>
						Couchmaster CYCON² lap desk
					</span>
				</p>
				<a className='text-indigo-500 text-sm inline-flex items-center mt-2 md:mb-2 lg:mb-0'>
					Learn More
				</a>
			</div>
		)
};

export default TrendingProductCard;