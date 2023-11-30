import { useLoaderData, useNavigate } from 'react-router-dom'
import VoteInfo from '../../components/shared/VoteInfo'
import DetailsInfo from './components/DetailsInfo'
import ReviewForm from './components/ReviewForm'
import Reviews from './components/Reviews'
import useAuth from '../../hooks/useAuth'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import { useEffect, useState } from 'react'

const ProductDetails = () => {
	const [reviews, setReviews] = useState([])
	const [refresh, setRefresh] = useState(false)
	const { user } = useAuth()

	const product = useLoaderData()
	const axiosPublic = useAxiosPublic()

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await axiosPublic.get(`/allReviews/${product?._id}`)
				setReviews(response.data)

			} catch (error) {
				console.error('Error fetching reviews:', error)
			}
		}

		if (product?._id) {
			fetchReviews()
		}
	}, [product?._id, axiosPublic, refresh])

	const navigate = useNavigate()
	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<div className='container-size px-2 mt-10'>
			<div className='px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col lg:flex-row -mx-4'>
					<div className='md:flex-1 order-2 px-4'>
						<div className='h-[460px] rounded-lg bg-gray-300 mb-4'>
							<img
								className='w-full h-full rounded-xl object-cover'
								src={product?.image}
								alt=''
							/>
						</div>
						<div className='flex items-center justify-between mb-8'>
							<button
								onClick={handleGoBack}
								className='px-6 py-2 text-sm font-medium text-white leading-tight inline-block bg-green-700 rounded-full shadow-xl border border-transparent hover:bg-green-800'
							>
								Go back
							</button>
							<VoteInfo productId={product?._id} />
						</div>
						<div>
							<h2 className='text-base font-bold text-gray-700 mt-10 mb-2'>
								What people are saying about it:
							</h2>
							<ul className='list-none'>
								{reviews.map(review => (
									<Reviews key={review._id} review={review} />
								))}
							</ul>
						</div>
					</div>
					<div className='md:flex-1 order-1 px-4 mb-8'>
						<DetailsInfo product={product} />
						{/* report button */}
						{user?.email === product?.email ? (
							''
						) : (
							<button className='flex items-center my-4 bg-red-100 hover:bg-red-200 px-3 py-1 rounded-md text-xs font-medium'>
								<img
									className='w-4 h-4'
									src='https://img.icons8.com/color/48/high-importance--v1.png'
									alt='high-importance--v1'
								/>
								<span className='ml-1'>Report</span>
							</button>
						)}
						<div>
							{user?.email === product?.email ? (
								<p className='bg-yellow-100 w-[14rem] text-sm rounded-lg p-2 mt-4 mb-2'>
									You have posted this product.
								</p>
							) : (
								<ReviewForm product={product} refresh={refresh} setRefresh={setRefresh} />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
