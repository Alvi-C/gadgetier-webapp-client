import moment from 'moment'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const ReviewForm = ({ product, refresh, setRefresh }) => {
	const axiosPublic = useAxiosPublic()
	const { register, handleSubmit, reset } = useForm()

	const { user } = useAuth()

	const userInfo = {
		userName: user?.displayName,
		userEmail: user?.email,
		userImage: user?.photoURL,
	}

	const datePosted = moment(new Date()).format('ll')

	const onSubmit = async data => {
		const reviewData = {
			userName: userInfo.userName,
			userEmail: userInfo.userEmail,
			userImage: userInfo.userImage,
			productId: product?._id,
			rating: data.rating,
			review: data.review,
			datePosted: datePosted,
		}
		// console.log(reviewData)

		try {
			const res = await axiosPublic.post('/postReview', reviewData)

			if (res.data?.insertedId) {
				setRefresh(!refresh)
				reset()
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Review added successfully',
					showConfirmButton: false,
					timer: 1500,
				})
			}
		} catch (error) {
			if (error.response?.status === 409) {
				// If the user already reviewed the product
				Swal.fire({
					position: 'top-end',
					icon: 'error',
					title: error.response.data.message,
					showConfirmButton: false,
					timer: 2000,
				})
			} else {
				// Handle other errors
				Swal.fire({
					position: 'top-end',
					icon: 'error',
					title: 'An error occurred while posting your review',
					showConfirmButton: false,
					timer: 2000,
				})
			}
		}
	}

	// console.log(refresh);
	return (
		<div>
			<p className='font-bold text-gray-700 '>Post a review:</p>
			<div className='sm:w-[38rem] md:w-[30rem]'>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4 py-4'>
					<div className='block' htmlFor='name'>
						<label className='block text-slate-700 text-xs font-medium mb-2'>
							Name
						</label>
						<input
							type='text'
							disabled
							defaultValue={userInfo.userName}
							placeholder='Enter your name'
							className='w-full text-sm rounded-md border bg-white px-2 py-2 outline-none ring-slate-600 focus:ring-1'
						/>
					</div>
					<div className='block' htmlFor='name'>
						<label className='block text-slate-700 text-xs font-medium mb-2'>
							Email
						</label>
						<input
							type='email'
							disabled
							defaultValue={userInfo.userEmail}
							placeholder='Enter your email'
							className='w-full text-sm rounded-md border bg-white px-2 py-2 outline-none ring-slate-600 focus:ring-1'
						/>
					</div>
					<div className='block' htmlFor='name'>
						<label className='block text-slate-700 text-xs font-medium mb-2'>
							Image url
						</label>
						<input
							type='text'
							disabled
							defaultValue={userInfo.userImage}
							placeholder='image url'
							className='w-full text-sm rounded-md border bg-white px-2 py-2 outline-none ring-slate-600 focus:ring-1'
						/>
					</div>
					<div>
						<label
							htmlFor='hs-select-label'
							className='block text-slate-700 text-xs font-medium mb-2'
						>
							Ratings
						</label>
						<select
							id='hs-select-label'
							{...register('rating', { required: true })}
							className='py-3 px-2 block w-full border border-gray-200 rounded-lg text-sm text-slate-700 disabled:opacity-50 disabled:pointer-events-none ring-slate-600 focus:ring-1 focus:ring-slate-600'
						>
							<option defaultValue={''}>Give rating</option>
							<option value='1'>1 Poor</option>
							<option value='2'>2 Fair</option>
							<option value='3'>3 Good</option>
							<option value='4'>4 Very good</option>
							<option value='5'>5 Excellent</option>
						</select>
					</div>
					<div className='block' htmlFor='name'>
						<label className='block text-slate-700 text-xs font-medium mb-2'>
							Review
						</label>
						<textarea
							type='text'
							{...register('review', { required: true })}
							placeholder='write a review..'
							className='h-32 w-full rounded-md border text-sm bg-white px-2 py-2 outline-none ring-slate-600 focus:ring-1'
						></textarea>
					</div>
					<input
						type='submit'
						value='Post'
						className='px-6 py-2 text-sm font-medium text-white leading-tight inline-block bg-green-700 rounded-full shadow-xl border border-transparent hover:bg-green-800'
					/>
				</form>
			</div>
		</div>
	)
}

export default ReviewForm
