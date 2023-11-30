import { useState, useEffect } from 'react'
import Pagination from './components/Pagination'
import ProductItemsCard from './components/ProductItemsCard'
import SearchBar from './components/SearchBar'
import useAxiosPublic from '../../hooks/useAxiosPublic'

const ProductsPage = () => {
	const axiosPublic = useAxiosPublic()
	const [currentPage, setCurrentPage] = useState(1)
	const [products, setProducts] = useState([])
	const [totalProducts, setTotalProducts] = useState(0)
	const [isLoading, setIsLoading] = useState(true)
	const limit = 8

	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true)
			try {
				const response = await axiosPublic.get(
					`/showProducts?page=${currentPage}&limit=${limit}`
				)
				setProducts(response.data.products)
				setTotalProducts(response.data.totalProducts)
			} catch (error) {
				console.error('Error fetching products:', error)
			}
			setIsLoading(false)
		}

		fetchProducts()
	}, [currentPage, axiosPublic])

	const handlePageChange = newPage => {
		setCurrentPage(newPage)
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<div className='container-size px-2'>
			<SearchBar />
			<div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
				{products.map(product => (
					<ProductItemsCard key={product.id} product={product} />
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={Math.ceil(totalProducts / limit)}
				onPageChange={handlePageChange}
			/>
		</div>
	)
}

export default ProductsPage
