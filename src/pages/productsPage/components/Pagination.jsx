
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'

const Pagination = ({ currentPage, onPageChange, totalPages }) => {
	const handlePrev = () => {
		if (currentPage > 1) onPageChange(currentPage - 1)
	}

	const handleNext = () => {
		if (currentPage < totalPages) onPageChange(currentPage + 1)
	}

	return (
		<div className='my-16'>
			<nav className='flex items-center justify-center gap-x-1'>
				<button
					onClick={handlePrev}
					disabled={currentPage === 1}
					className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
				>
					<GrFormPrevious />
					<span>Previous</span>
				</button>
				{/* Dynamically create page numbers */}
				{[...Array(totalPages).keys()].map(page => (
					<button
						key={page + 1}
						onClick={() => onPageChange(page + 1)}
						aria-current={page + 1 === currentPage ? 'page' : undefined}
						className='min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
					>
						{page + 1}
					</button>
				))}
				<button
					onClick={handleNext}
					disabled={currentPage === totalPages}
					className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
				>
					<span>Next</span>
					<GrFormNext />
				</button>
			</nav>
		</div>
	)
}

export default Pagination
