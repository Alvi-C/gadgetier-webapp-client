import SectionHeading from '../../../components/shared/SectionHeading'
import TrendingProductCard from './TrendingProductCard'


const TrendingProducts = () => {
	return (
		<div className='container-size px-2 py-16 lg:px-8'>
			<SectionHeading title='Trending Products' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 row-gap-5 mb-8 '>
				<TrendingProductCard />
				<TrendingProductCard />
				<TrendingProductCard />
				<TrendingProductCard />
				<TrendingProductCard />
				<TrendingProductCard />
			</div>
			<div className='text-center mt-10'>
				<button className='bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Show all products</button>
			</div>
		</div>
	)
}

export default TrendingProducts
