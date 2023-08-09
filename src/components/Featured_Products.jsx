import React from 'react'
import { UseProductsProvider } from '../context/products_context'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SingleProduct } from './SingleProduct'
import { Link } from 'react-router-dom'
const Featured_Products = () => {
    const {
        product_Loading: loading,
        error,
        featured_products: products
    } = UseProductsProvider()
    console.log(products)

    return (
        <div className="featuredProducts mt-20 p-5 flex flex-col justify-center w-full gap-4">
            <div className="header text-center flex items-center gap-2 flex-col text-3xl mb-9 font-bold">
                Featured Products
                <div className="underline w-28 h-1 bg-[#ab7a5f]"></div>
            </div>
            <div className="products flex gap-8 flex-wrap justify-center">
            {
        !loading ?
        products.slice(0, 3).map(
            (product) => {
                return <SingleProduct key={product.id} {...product} />
            }
            )
        : <div className='flex'>
            <Skeleton
            className='flex flex-col gap-4'
            count={3}
            baseColor="#4d4c4c"
            highlightColor="#444"
            width={'300px'}
            height={'200px'}
            containerClassName='flex w-[99vw] justify-center gap-4 lg:gap-8 flex-wrap'
            />
            </div>
        }
            </div>
            <div className="btn w-full flex justify-center mt-10">
                <Link
                    to='products'
                    className='bg-[#ab7a5f] rounded-md transition hover:text-[#453227] hover:bg-[#c5a491] text-white justify-center flex w-32 p-2'>
                All Products
            </Link>
        </div>
        </div>
  )
}

export default Featured_Products