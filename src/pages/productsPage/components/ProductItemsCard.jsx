import { Link } from "react-router-dom";
import VoteInfo from "../../../components/shared/VoteInfo";


const ProductItemsCard = ({ product }) => {

	// const { image, productName, _id, tags, upVote, downVote } = product
	console.log(product._id);

    return (
			<div>
				<div className='mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4'>
					<div>
						<img
							src={product?.image}
							className='w-full mb-4 rounded-lg shadow-none transition-shadow duration-500 ease-in-out group-hover:shadow-lg'
							alt='laravel9-1646792144.jpg'
						/>
						<div className='flex flex-wrap items-center'>
							{product?.tags.map((tag, index) => (
								<span
									key={index}
									className='inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-green-500'
								>
									{tag}
								</span>
							))}
						</div>
						<p className='font-display max-w-sm text-xl font-bold leading-tight my-3'>
							<span className='link-underline link-underline-black text-black'>
								{product?.productName}
							</span>
						</p>
						<div className='flex items-center justify-between'>
							<Link
								to={`/products/${product?._id}`}
								className='text-indigo-500 text-sm inline-flex items-center mt-2 md:mb-2 lg:mb-0'
							>
								Learn More
							</Link>
							<VoteInfo upVote={product?.upVote} downVote={product?.downVote} />
						</div>
					</div>
				</div>
			</div>
		)
};

export default ProductItemsCard;