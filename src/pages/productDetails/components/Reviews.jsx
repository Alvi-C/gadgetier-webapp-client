
import StarRating from './StarRating';

const Reviews = () => {
    return (
			<li className='py-8 text-left border-b px-4 m-2'>
				<div className='flex items-start'>
					<img
						className='block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle'
						src='https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg'
						alt=''
					/>

					<div className='ml-6'>
						<div className='flex items-center'>
							<StarRating rating={3} />
						</div>
						<p className='mt-5 text-sm text-gray-900'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
							blanditiis sapiente ab dolores, ad dignissimos perspiciatis.
						</p>
						<p className='mt-5 text-sm font-bold text-gray-900'>John Lester</p>
						<p className='mt-1 text-sm text-gray-600'>March 01, 2022</p>
					</div>
				</div>
			</li>
		)
};

export default Reviews;