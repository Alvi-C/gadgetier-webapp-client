
const ReviewForm = () => {
    return (
			<div>
				<p className='font-bold text-gray-700 '>Post a review:</p>
				<div className='sm:w-[38rem] md:w-[30rem]'>
					<form className='space-y-4 py-4'>
						<div className='block' htmlFor='name'>
							<label className='block text-slate-700 text-xs font-medium mb-2'>
								Name
							</label>
							<input
								className='w-full text-sm rounded-md border bg-white px-2 py-2 outline-none ring-slate-600 focus:ring-1'
								type='text'
								placeholder='Enter your name'
							/>
						</div>
						<div className='block' htmlFor='name'>
							<label className='block text-slate-700 text-xs font-medium mb-2'>
								Image url
							</label>
							<input
								className='w-full text-sm rounded-md border bg-white px-2 py-2 outline-none ring-slate-600 focus:ring-1'
								type='text'
								placeholder='image url'
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
								Request
							</label>
							<textarea
								className='h-32 w-full rounded-md border text-sm bg-white px-2 py-2 outline-none ring-slate-600 focus:ring-1'
								type='text'
								placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
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
};

export default ReviewForm;

