import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UseProductsProvider } from '../context/products_context'
import ErrorPage from '../Pages/ErrorPage'
import PageHero from '../components/PageHero'
import PageLoader from '../components/PageLoader'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SinglePageError from './SinglePageError'
import Images from '../components/Images'
import Stars from '../components/Stars'
import { formatPrice } from '../reducers/helpers'

import AddToCard from '../components/AddToCard'

const single_Product_Url = 'https://course-api.com/react-store-single-product?id='

const SingleProductPage = () => {
    const {
        fetchSingleProduct,
        single_Product: product,
        product_Loading: loading,
        singleProductError,
        singleProductErrorMsg
    } = UseProductsProvider()
    const {
        id: sku,
        colors = [""],
        category,
        shipping,
        stars,
        name,
        price,
        reviews,
        company,
        description,
        stock,
        images
    } = product

    const { id } = useParams()
    useEffect(() => {
        fetchSingleProduct(`${single_Product_Url}${id}`)
    }, [id])

    if (loading) {
        return <section>
            <PageLoader />
        </section>
    }
    if (singleProductError) {
        return <SinglePageError
            errorCode={singleProductErrorMsg?.response?.status}
            errorMsg={singleProductErrorMsg.message}
        />
    }


    return (
        <section className='flex flex-col justify-center'>
            <PageHero
                title={
                    <div className='w-fit'>
                        <Link to='/products' style={{ color: 'rgb(121, 87, 68)' }}>Products </Link>
                        <span className=' first-letter:uppercase '>/ { product.name }</span>
                    </div>
                } />
            <Link
                to='/products'
                className='top-[100px] left-[10%] w-[150px] flex items-center justify-center p-2 rounded-md relative'
                style={{ backgroundColor: '#ab7a5f' }}>
                Back To Products
            </Link>
            <div className="singleProductContainer m-h-[100vh] mt-[110px] w-[100%] flex flex-col md:flex-row justify-center gap-2">
                <div className="imagesComponent h-[100%] my-10 md:w-[60%] flex justify-center">
                    <Images images={images} />
                </div>
                <div className="info w-fit mt-12 md:w-[50%] ml-6">
                    <div
                        className="name text-5xl min-w-[150px] font-semibold mb-4 text-[#102a42] first-letter:uppercase"
                    >{name}</div>
                    <div className="stars flex gap-3 items-center">
                        <Stars stars={stars} />
                        <span>({reviews} customer reviews)</span>
                    </div>
                    <div className="price text-[#ab7a5f] text-2xl my-2">{formatPrice(price)}</div>
                    <p className='max-w-[450px]'>{description}</p>
                    <div className="moreInfo my-4 flex gap-4">
                        <span className='text-[#324d67] font-bold'>Available : </span>
                        {stock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </div>
                    <div className="moreInfo my-4 flex gap-4">
                    <span className='text-[#324d67] font-bold'>SKU : </span>
                        {sku}
                    </div>
                    <div className="moreInfo my-4 flex gap-4">
                    <span className='text-[#324d67] font-bold'>Brand : </span>
                        {company}
                    </div>

                    <hr style={{ backgroundColor: '#bcccdc', width: '100%', height: '2px' }} />
                
                    
                    {stock > 0 && <AddToCard  {...product} product={product} />}
                    
                </div>
            </div>

    </section>
  )
}

export default SingleProductPage