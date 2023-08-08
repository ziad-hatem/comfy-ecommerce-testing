import React from 'react'
import { UseProductsProvider } from '../context/products_context'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SingleProduct } from './SingleProduct'
const Featured_Products = () => {
    const {
        product_Loading: loading,
        error,
        featured_products: products
    } = UseProductsProvider()
    console.log(products)

    return (
        <div className="featuredProducts mt-20 p-5 flex gap-4 flex-wrap bg-red-500">
            <div className="header">
            Featured Products
            </div>
        {
        loading ?
        products.map(
            (product) => {
                return <SingleProduct key={product.id} {...product} />
            }
            )
        : <div className='flex'>
            <Skeleton
            className='flex flex-col '
            count={4}
            baseColor="#4d4c4c"
            highlightColor="#444"
            width={'300px'}
            height={'200px'}
            containerClassName='flex w-[100vw] justify-around gap-5 lg:gap-0 flex-wrap'
            />
            </div>
        }
        </div>
  )
}

export default Featured_Products