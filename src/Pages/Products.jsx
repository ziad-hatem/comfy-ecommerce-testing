import React from 'react'
import PageHero from '../components/PageHero'
import { UseProductsProvider } from '../context/products_context'
import { Skeleton } from '@mui/material'
import 'react-loading-skeleton/dist/skeleton.css'
import { SingleProduct } from '../components/SingleProduct'
const Products = () => {
  const {
    product_Loading: loading,
    products: products
  } = UseProductsProvider()

  const skeletonLoading = Array.from({ length: 20 }, (_, index) => {
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
      <section>
          <PageHero title={'Products'} />
      <div
        className="productContainer w-[98vw] flex flex-col gap-7 md:flex-row flex-wrap justify-center items-center m-h-screen my-[100px]">
          {
        !loading ?
        products.map(
            (product) => {
                return <SingleProduct key={product.id} {...product} />
            }
            )
            : <div className='flex gap-4 flex-wrap'>
              {
                skeletonLoading
              }
            </div>
        }
        </div>    
    </section>
  )
}

export default Products