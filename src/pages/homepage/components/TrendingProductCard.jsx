import { Link } from "react-router-dom";


const TrendingProductCard = ({ product }) => {
	return (
		<div>
			<img
				src={product?.image}
				className='w-full mb-4 rounded-lg shadow-none transition-shadow duration-500 ease-in-out group-hover:shadow-lg'
				alt='laravel9-1646792144.jpg'
			/>
			<p className='font-display max-w-sm text-lg font-bold leading-tight mt-3 mb-1'>
				<span className='link-underline link-underline-black text-black'>
					{product?.productName}
				</span>
			</p>
			<div className='flex items-center justify-between'>
				<Link
					to={`/products/${product?._id}`}
					className='text-indigo-500 text-xs inline-flex items-center mt-2 md:mb-2 lg:mb-0'
				>
					Learn More
				</Link>
			</div>
		</div>
	)
}

export default TrendingProductCard;