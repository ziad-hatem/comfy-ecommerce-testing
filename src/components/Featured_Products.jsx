import React from 'react'
import { UseProductsProvider } from '../context/products_context'
// import Skeleton from 'react-loading-skeleton'
import { Skeleton } from '@mui/material'
import 'react-loading-skeleton/dist/skeleton.css'
import { SingleProduct } from './SingleProduct'
import { Link } from 'react-router-dom'
const Featured_Products = () => {
    const {
        product_Loading: loading,
        error,
        featured_products: products
    } = UseProductsProvider()

    const skeletonLoading = Array.from({ length: 3 }, (_, index) => {
        return (
          <div className="div">
            <Skeleton key={index} animation='wave' variant='rectangular' width={300} height={200} />
            <div className="infoLoad mt-2 flex justify-between">
            <Skeleton key={index} animation='wave' variant='text' width={100} />
            <Skeleton key={index} animation='wave' variant='text' width={70} />
            </div>
          </div>
        )
      })

    return (
        <div className="featuredProducts mt-20 p-5 flex flex-col justify-center w-full gap-4">
            <div className="header text-center flex items-center gap-2 flex-col text-3xl mb-9 font-bold">
                Featured Products
                <div className="underline w-28 h-1 bg-[#ab7a5f]"></div>
            </div>
            <div className="products flex gap-8 flex-wrap justify-center">
                 
                       
            {
            !loading ? products.slice(0, 3).map((product) => { return <SingleProduct key={product.id} {...product} /> }) 
            :
            skeletonLoading
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