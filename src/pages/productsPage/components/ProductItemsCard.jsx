import { Link } from "react-router-dom";
import VoteInfo from "../../../components/shared/VoteInfo";


const ProductItemsCard = () => {
    return (
			<div>
				<div className='mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4'>
					<div>
						<img
							src='https://thegadgetflow.com/wp-content/uploads/2020/12/Couchmaster-CYCON-Gaming-Lapdesk-0001.jpg'
							className='w-full mb-4 rounded-lg shadow-none transition-shadow duration-500 ease-in-out group-hover:shadow-lg'
							alt='laravel9-1646792144.jpg'
						/>
						<div className='flex flex-wrap items-center'>
							<span className='inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-green-500'>
								Trend
							</span>
							<span className='inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-green-500'>
								Electronics
							</span>
							<span className='inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-green-500'>
								Gadget
							</span>
						</div>
						<p className='font-display max-w-sm text-xl font-bold leading-tight my-3'>
							<span className='link-underline link-underline-black text-black'>
								Couchmaster CYCON² lap desk
							</span>
						</p>
						<div className='flex items-center justify-between'>
							<Link
								to='#'
								className='text-indigo-500 text-sm inline-flex items-center mt-2 md:mb-2 lg:mb-0'
							>
								Learn More
							</Link>
							<VoteInfo />
						</div>
					</div>
				</div>
			</div>
		)
};

export default ProductItemsCard;