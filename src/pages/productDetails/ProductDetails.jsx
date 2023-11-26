
import PrimaryButton from '../../components/shared/PrimaryButton'
import VoteInfo from '../../components/shared/VoteInfo'
import DetailsInfo from './components/DetailsInfo'
import ReviewForm from './components/ReviewForm'
import Reviews from './components/Reviews'

const ProductDetails = () => {


	return (
		<div className='container-size px-2 mt-10'>
			<div className='px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col lg:flex-row -mx-4'>
					<div className='md:flex-1 order-2 px-4'>
						<div className='h-[460px] rounded-lg bg-gray-300 mb-4'>
							<img
								className='w-full h-full rounded-xl object-cover'
								src='https://thegadgetflow.com/wp-content/uploads/2023/11/TiT-Stylish-Unique-Top-Inspired-Wrist-Wearable-01-1-768x461.jpeg'
								alt=''
							/>
						</div>
						<div className='flex items-center justify-between mb-8'>
							<PrimaryButton title='Go back' />
							<VoteInfo />
						</div>
						<div>
							<h2 className='text-base font-bold text-gray-700 mt-10 mb-2'>
								What people are saying about it:
							</h2>
							<ul className='list-none'>
								<Reviews />
								<Reviews />
								<Reviews />
							</ul>
						</div>
					</div>
					<div className='md:flex-1 order-1 px-4 mb-8'>
						<DetailsInfo />
						<button className='flex items-center my-4 bg-red-100 hover:bg-red-200 px-3 py-1 rounded-md text-xs font-medium'>
							<img
								className='w-4 h-4'
								src='https://img.icons8.com/color/48/high-importance--v1.png'
								alt='high-importance--v1'
							/>
							<span className='ml-1'>Report</span>
						</button>
						<div>
							<ReviewForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
