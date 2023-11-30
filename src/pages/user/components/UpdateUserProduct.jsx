
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUserProduct = () => {

	const { register, handleSubmit } = useForm()
	const { user } = useAuth()
	const axiosSecure = useAxiosSecure()
	const navigate = useNavigate()

	const fetchedData = useLoaderData()
	// console.log(fetchedData);
	const {_id, productName, image, description} = fetchedData

	const userInfo = {
		userName: user?.displayName,
		userEmail: user?.email,
		userImage: user?.photoURL,
	}

	const productData = {
		productName: productName,
		image: image,
		description: description,
	}

	const onSubmit = async data => {
		// console.log(data)
		// update product
		const response = await axiosSecure.patch(`/updateProduct/${_id}`, data)
		console.log(response.data)
		if (response.data?.result?.matchedCount > 0) {
			// update response
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'item updated successfully',
				showConfirmButton: false,
				timer: 1500,
			})
			navigate('/dashboard/user/productList')
		} else {
			// update failed
			Swal.fire({
				icon: 'error',
				title: 'Update Failed',
				text: 'Failed to update the item. Please try again.',
			})
		}
	}

	const handleCancelBtn = () => {
		navigate('/dashboard/user/productList')
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-green-700'>
			<div className='w-full lg:w-1/2 px-4 my-16'>
				<h2 className='text-3xl font-bold text-white mb-2'>Update product</h2>
				<div className='bg-white relative rounded-lg p-8 sm:p-12 shadow-lg'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='mb-2'>
							<input
								type='text'
								disabled
								defaultValue={userInfo?.userName}
								placeholder='Your name'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							/>
						</div>
						<div className='mb-2'>
							<input
								type='email'
								disabled
								defaultValue={userInfo.userEmail}
								placeholder='Your email'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							/>
						</div>
						<div className='mb-2'>
							<input
								type='text'
								disabled
								defaultValue={userInfo.userImage}
								placeholder='Your image url'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							/>
						</div>
						<div className='mb-2'>
							<input
								type='text'
								{...register('productName', { required: true })}
								defaultValue={productData.productName}
								placeholder='Product Name'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							/>
						</div>

						<div className='mb-2'>
							<input
								type='text'
								{...register('productImage', { required: true })}
								defaultValue={productData.image}
								placeholder='Product image url'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							/>
						</div>

						<div className='mb-2'>
							<textarea
								rows='6'
								{...register('description', { required: true })}
								defaultValue={productData.description}
								placeholder='Product description'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							></textarea>
						</div>

						<input
							type='submit'
							value='Update Product'
							className='mt-6 px-6 py-2 text-sm font-medium text-white leading-tight inline-block bg-green-700 rounded-full shadow-xl border border-transparent hover:bg-green-800'
						/>
					</form>
					<button onClick={handleCancelBtn} className='mt-6 px-6 py-2 text-sm font-medium text-white leading-tight inline-block bg-green-700 rounded-full shadow-xl border border-transparent hover:bg-green-800'>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}

export default UpdateUserProduct
