
import { useState } from 'react'
import { TagsInput } from 'react-tag-input-component'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const AddUserProduct = () => {

	const [tags, setTags] = useState([])
	const { register, handleSubmit, reset } = useForm()
	const { user } = useAuth()
	const axiosPublic = useAxiosPublic()

	const userInfo = {
		userName: user?.displayName,
		userEmail: user?.email,
		userImage: user?.photoURL,
	}

	const onSubmit = async data => {
		// console.log(data);
		const productData = {
			name: userInfo.userName,
			email: userInfo.userEmail,
			userImage: userInfo.userImage,
			productName: data.productName,
			image: data.productImage,
			description: data.description,
			tags: tags,
			upVote: 0,
			downVote: 0,
			status: 'pending',
			reported: 'no',
		}
		// console.log(productData)

		const res = await axiosPublic.post('/products', productData)
		if (res.data?.insertedId) {
			reset()
			setTags([])
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: `${data.productName} added successfully`,
				showConfirmButton: false,
				timer: 1500,
			})
		}
	}


	return (
		<div className='min-h-screen flex items-center justify-center bg-green-700'>
			<div className='w-full lg:w-1/2 px-4 my-16'>
				<h2 className='text-3xl font-bold text-white mb-2'>Add product</h2>
				<div className='bg-white relative rounded-lg p-8 sm:p-12 shadow-lg'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='mb-2'>
							<input
								type='text'
								disabled
								defaultValue={userInfo.userName}
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
								placeholder='Product Name'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							/>
						</div>
						<div className='mb-2'>
							<input
								type='text'
								{...register('productImage', { required: true })}
								placeholder='Product image url'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							/>
						</div>
						<div className='mb-2'>
							<textarea
								rows='6'
								{...register('description', { required: true })}
								placeholder='Product description'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							></textarea>
						</div>
						<div>
							<TagsInput
								value={tags}
								onChange={setTags}
								name='tags'
								placeHolder='Enter tags'
							/>
							<em className='text-slate-400 text-sm'>
								press enter to add new tag
							</em>
						</div>
						<input
							type='submit'
							value='Add Product'
							className='mt-6 px-6 py-2 text-sm font-medium text-white leading-tight inline-block bg-green-700 rounded-full shadow-xl border border-transparent hover:bg-green-800'
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddUserProduct
