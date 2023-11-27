import { useForm } from "react-hook-form"


const AddCoupon = () => {

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = data => {

        const couponInfo = {
            couponTitle: data.couponTitle,
            couponCode: data.couponCode,
            amount: data.amount,
            expiryDate: data.expiryDate,
            description: data.description
        }
        console.log(couponInfo)
        reset()
    }

	return (
		<div className='min-h-screen flex items-center justify-center bg-green-700'>
			<div className='w-full lg:w-1/2 xl:w-5/12 px-4'>
				<h2 className='text-3xl font-bold text-white mb-2'>Add coupon</h2>
				<div className='bg-white relative rounded-lg p-8 sm:p-12 shadow-lg'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='mb-2'>
							<input
								type='text'
								{...register('couponTitle', { required: true })}
								placeholder='coupon title'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							/>
						</div>
						<div className='mb-2'>
							<input
								type='text'
								{...register('couponCode', { required: true })}
								placeholder='coupon code'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							/>
						</div>
						<div className='mb-2'>
							<input
								type='number'
								{...register('amount', { required: true })}
								placeholder='discount percentage'
								className='w-full rounded py-3 px-[14px] text-base border outline-none focus-visible:shadow-none focus:border-green-500'
							/>
						</div>

						<div className='mb-2'>
							<input
								type='date'
								{...register('expiryDate', { required: true })}
								placeholder='expire date'
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

						<input
							type='submit'
							value='Add Coupon'
							className='mt-6 px-6 py-2 text-sm font-medium text-white leading-tight inline-block bg-green-700 rounded-full shadow-xl border border-transparent hover:bg-green-800'
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddCoupon
