import FeaturedProducts from './components/FeaturedProducts'
import HomeBanner from './components/HomeBanner'
import Steps from './components/Steps'
import TrendingProducts from './components/TrendingProducts'

const HomaPage = () => {
	return (
		<div>
			<HomeBanner />
            <FeaturedProducts />
			<TrendingProducts />
			<Steps/>
		</div>
	)
}

export default HomaPage
