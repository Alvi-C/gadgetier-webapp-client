
import StarRating from './StarRating';

const Reviews = ({ review }) => {
	return (
		<li className='py-8 text-left border-b px-4 m-2'>
			<div className='flex items-start'>
				<img
					className='block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle'
					src={review.userImage}
					alt={review.userName}
				/>

				<div className='ml-6'>
					<div className='flex items-center'>
						<StarRating rating={review.rating} />
					</div>
					<p className='mt-5 text-sm text-gray-900'>{review.review}</p>
					<p className='mt-5 text-sm font-bold text-gray-900'>
						{review.userName}
					</p>
					<p className='mt-1 text-sm text-gray-600'>{review.datePosted}</p>
				</div>
			</div>
		</li>
	)
}

export default Reviews;
