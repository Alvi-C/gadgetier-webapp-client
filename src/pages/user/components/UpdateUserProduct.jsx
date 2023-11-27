import { useState } from 'react'
import { TagsInput } from 'react-tag-input-component'
import { useForm } from 'react-hook-form'

const UpdateUserProduct = () => {
	const [tags, setTags] = useState(['Shoe', 'Sport'])
	const { register, handleSubmit } = useForm()

	const userInfo = {
		userName: 'David',
		userEmail: 'aaa@example.com',
		userImage: 'https://images.unsplash.com',
	}

	const productData = {
		userName: userInfo.userName,
		userEmail: userInfo.userEmail,
		userImage: userInfo.userImage,
		productName: 'Nike Airwick',
		image: 'https://www.nike.com',
		description: 'This is description',
		tags: tags,
	}

	const onSubmit = data => {
		console.log(data)
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
						<div>
							<TagsInput
								value={tags}
								onChange={setTags}
								name='tags'
								placeHolder='Enter tags'
							/>
							<em className='text-slate-400 text-sm'>
								you cannot change tags
							</em>
						</div>
						<input
							type='submit'
							value='Update Product'
							className='mt-6 px-6 py-2 text-sm font-medium text-white leading-tight inline-block bg-green-700 rounded-full shadow-xl border border-transparent hover:bg-green-800'
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdateUserProduct
