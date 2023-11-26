import Pagination from "./components/Pagination"
import ProductItemsCard from "./components/ProductItemsCard"
import SearchBar from "./components/SearchBar"



const ProductsPage = () => {
	return (
		<div className='container-size px-2'>
			<div>
				<SearchBar/>
			</div>
			<div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <ProductItemsCard/>
                <ProductItemsCard/>
                <ProductItemsCard/>
                <ProductItemsCard/>
			</div>
			<div>
				<Pagination/>
			</div>
		</div>
	)
}

export default ProductsPage
