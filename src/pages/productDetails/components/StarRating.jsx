
const StarRating = ({ rating }) => {
	const maxRating = 5
	const starIcons = []

	for (let i = 1; i <= maxRating; i++) {
		if (i <= rating) {
			// Add a full star
			starIcons.push(
				<span key={i} className='text-yellow-400'>
					&#9733;
				</span>
			)
		} else if (i === Math.ceil(rating) && rating % 1 !== 0) {
			// Add a half star
			starIcons.push(
				<span key={i} className='text-yellow-400'>
					&#9734;
				</span>
			)
		} else {
			// Add an empty star
			starIcons.push(
				<span key={i} className='text-gray-200'>
					&#9734;
				</span>
			)
		}
	}

	return <div className='flex'>{starIcons}</div>
}

export default StarRating