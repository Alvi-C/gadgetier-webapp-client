import CouponCard from "./CouponCard";


const AllCoupons = () => {
    return (
			<div className='min-h-screen bg-green-700'>
				<div className="p-4">
					<h2 className='text-3xl font-bold text-white mb-2'>All coupons</h2>
					<h2 className='text-xl font-bold text-white mb-2'>Total: 6</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                        <CouponCard/>
                        <CouponCard/>
                        <CouponCard/>
                    </div>
				</div>
			</div>
		)
};

export default AllCoupons;