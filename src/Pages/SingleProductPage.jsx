import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UseProductsProvider } from '../context/products_context'
import PageHero from '../components/PageHero'
import PageLoader from '../components/PageLoader'
const single_Product_Url = 'https://course-api.com/react-store-single-product?id='

const SingleProductPage = () => {
    const {
        fetchSingleProduct,
        single_Product: product,
        product_Loading: loading,
        error
    } = UseProductsProvider()
    const { id } = useParams()
    console.log(product);
    useEffect(() => {
        fetchSingleProduct(`${single_Product_Url}${id}`)
    }, [id])
    console.log(loading);
    if (loading) {
        return <PageLoader />
    }

    return (
        <section>
            <PageHero title={<Link to='/products'>
                 <span style={{color: 'rgb(121, 87, 68)'}}>Products</span> / {product.name}
            </Link>} />
    </section>
  )
}

export default SingleProductPage