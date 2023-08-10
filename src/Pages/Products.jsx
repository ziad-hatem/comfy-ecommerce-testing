import React from 'react'
import PageHero from '../components/PageHero'
import { UseProductsProvider } from '../context/products_context'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SingleProduct } from '../components/SingleProduct'
const Products = () => {
  const {
    product_Loading: loading,
    products: products
  } = UseProductsProvider()
  
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
            : <div className='flex'>
            <Skeleton
            className='flex flex-col gap-4'
            count={15}
            baseColor="#4d4c4c"
            highlightColor="#444"
            width={'300px'}
            height={'200px'}
            containerClassName='flex w-[99vw] my-5 justify-center gap-4 lg:gap-8 flex-wrap'
            />
            </div>
        }
        </div>    
    </section>
  )
}

export default Products