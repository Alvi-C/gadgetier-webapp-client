const PrimaryButton = ({ title }) => {
	return (
		<div>
			<button className='px-6 py-2 text-sm font-medium text-white leading-tight inline-block bg-green-700 rounded-full shadow-xl border border-transparent hover:bg-green-800'>
				{title}
			</button>
		</div>
	)
}

export default PrimaryButton
