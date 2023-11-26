import StarRating from "./StarRating";


const DetailsInfo = () => {
    return (
			<div>
				<h2 className='text-2xl font-bold text-gray-900 mb-2'>Heading</h2>
				<div className='flex mb-2'>
					<div className='mr-4'>
						<span className='font-bold text-gray-900 '>Price: </span>
						<span className='text-gray-600 '>$123</span>
					</div>
					<div className='mr-4'>
						<span className='font-bold text-gray-900 '>Brand: </span>
						<span className='text-gray-600 '>Brand name</span>
					</div>
				</div>
				<div className="my-4">
					<span className='font-bold text-gray-900 '>Tags: </span>
					<span className='text-gray-600 '>mobile</span>
				</div>
				<div className='flex mb-4'>
					<span className='font-bold text-gray-900 mr-2'>Ratings: </span>
					<StarRating rating={3} />
				</div>
				<div>
					<span className='font-bold text-gray-900 '>Product Description:</span>
					<p className='text-base text-gray-900 mt-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						voluptatibus voluptates ex. Incidunt dicta facilis alias
						exercitationem mollitia deserunt, nam ab fugit voluptatem. Soluta ea
						obcaecati consectetur odio totam vel impedit et magni aliquam
						recusandae, at adipisci cumque aut minima voluptatem. Distinctio
						corrupti mollitia veritatis placeat illum nihil quae voluptatem!
					</p>
				</div>
			</div>
		)
};

export default DetailsInfo;