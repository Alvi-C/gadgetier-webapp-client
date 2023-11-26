

const VoteInfo = () => {
    return (
			<div className='flex items-center justify-between text-sm text-gray-600 fill-current'>
				<div className='flex items-center'>
					<button className='flex items-center hover:bg-green-100 p-1 rounded-md'>
						<img
							className='w-5 h-5 -mt-1'
							src='https://img.icons8.com/retro/32/thumb-up.png'
							alt='external-like-feedback-kmg-design-glyph-kmg-design'
						/>
						<span className='ml-1'>20</span>
					</button>
					<button className='flex items-center hover:bg-red-100 p-1 ml-1 rounded-md'>
						<img
							className='w-5 h-5 mt-1'
							src='https://img.icons8.com/retro/32/thumbs-down.png'
							alt='external-dislike-feedback-kmg-design-glyph-kmg-design'
						/>
						<span className='ml-1'>10</span>
					</button>
				</div>
			</div>
		)
};

export default VoteInfo;