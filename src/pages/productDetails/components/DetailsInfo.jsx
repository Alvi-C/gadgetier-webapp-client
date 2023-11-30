

const DetailsInfo = ({ product }) => {
    return (
			<div>
				<h2 className='text-2xl font-bold text-gray-900 mb-2'>
					{product?.productName}
				</h2>

				<div className='flex gap-2 my-4'>
					<p className='font-bold text-gray-900 '>Tags: </p>
					{product?.tags.map((tag, index) => (
						<span
							key={index}
							className='inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-green-500'
						>
							{tag}
						</span>
					))}
				</div>
				<div>
					<span className='font-bold text-gray-900 '>Product Description:</span>
					<p className='text-base text-gray-900 mt-2'>
						{product?.description}
					</p>
				</div>
			</div>
		)
};

export default DetailsInfo;