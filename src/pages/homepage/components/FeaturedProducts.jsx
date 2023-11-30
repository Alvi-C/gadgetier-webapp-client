import SectionHeading from '../../../components/shared/SectionHeading'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import FeaturedProductCard from './FeaturedProductCard';

const FeaturedProducts = () => {

	const axiosPublic = useAxiosPublic()

	const {data: featuredProducts} = useQuery({
		queryKey: ['featuredProducts'],
		queryFn: async () => {
			const res = await axiosPublic.get(`/featuredProducts`)
			return res.data
		},
	})

	// console.log(featuredProducts)

	if(!featuredProducts) {
		return <div></div>
	} else {
		return (
			<div className='bg-green-50 h-auto'>
				<div className='container-size px-2 py-16 lg:px-8'>
					<SectionHeading title='Featured Products' />
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 row-gap-5 mb-8 '>
						{featuredProducts.map(product => (
							<FeaturedProductCard key={product._id} product={product} />
						))}
					</div>
				</div>
			</div>
		)
	}


}

export default FeaturedProducts
