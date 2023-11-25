import SectionHeading from '../../../components/shared/SectionHeading'
import ProductItemsCard from '../../productsPage/components/ProductItemsCard'

const FeaturedProducts = () => {
	return (
		<div className='bg-green-50 h-auto'>
			<div>
                <div className='container-size px-2 py-16 lg:px-8'>
                    <SectionHeading title='Featured Products'/>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 row-gap-5 mb-8 '>
						<ProductItemsCard />
						<ProductItemsCard />
						<ProductItemsCard />
						<ProductItemsCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeaturedProducts
