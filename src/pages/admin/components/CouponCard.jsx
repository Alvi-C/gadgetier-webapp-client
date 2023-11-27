

const CouponCard = () => {
    return (
			<div className='container bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w-md'>
				<div className='text-3xl font-bold mb-4'>Special Winter Offer!</div>
				<div className='text-lg mb-4'>
					Get <span className='text-yellow-500 font-bold'>25% OFF</span> your next
					purchase!
				</div>
				<div className='text-base mb-4'>Use coupon code:</div>
				<div className='bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between'>
					<span className='text-2xl font-semibold'>HELLOWINTER</span>
				</div>
				<div className='text-sm mt-4'>
					<p>
						Valid until <span className='font-semibold'>December 31, 2023</span>
					</p>
					<p className="text-xs">**Terms and conditions apply.</p>
				</div>
			</div>
		)
};

export default CouponCard;
