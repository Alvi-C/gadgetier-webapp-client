import { Link } from 'react-router-dom'
import PrimaryButton from '../../../components/shared/PrimaryButton'
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
			<Link to='/products' className='text-center mt-6'>
				<PrimaryButton title='View All Products' />
			</Link>
		</div>
	)
}

export default TrendingProducts
