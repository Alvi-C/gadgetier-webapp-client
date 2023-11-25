import ProductItemsCard from "./components/ProductItemsCard"



const ProductsPage = () => {
	return (
		<div className='container-size px-2 mt-10'>
			<div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <ProductItemsCard/>
                <ProductItemsCard/>
                <ProductItemsCard/>
                <ProductItemsCard/>
			</div>
		</div>
	)
}

export default ProductsPage
