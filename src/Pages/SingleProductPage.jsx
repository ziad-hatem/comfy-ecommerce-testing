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
import { Alert, Skeleton, Snackbar } from '@mui/material'

import AddToCard from '../components/AddToCard'
import { UseCartContext } from '../context/cart_context'

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
    const {notify} = UseCartContext()
    const { id } = useParams()
    useEffect(() => {
        fetchSingleProduct(`${single_Product_Url}${id}`)
    }, [id])

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
                className='top-[80px] left-[10%] w-[150px] flex items-center justify-center p-2 rounded-md relative'
                style={{ backgroundColor: '#ab7a5f' }}>
                Back To Products
            </Link>
            <div className="singleProductContainer grid grid-cols-8 m-h-[100vh] my-5 mt-[100px] w-[100%] gap-4">
                <div className="imagesComponent max-h-full lg:h-[800px] flex row-start-1 row-end-2 flex-col items-center lg:col-start-2 col-start-1 col-end-5 gap-4">
                    {!loading ? <Images images={images} /> : <Skeleton variant='rectangular' animation='wave' width={700} height={600} />}
                </div>
                <div className="info grid col-start-5 col-end-9 w-full mb-3">
                    <div
                        className="name text-5xl min-w-[150px] font-semibold mb-2 text-[#102a42] first-letter:uppercase"
                    >{!loading ? name : <Skeleton variant='text' animation='wave' width={300} />}</div>
                    <div className="stars flex gap-3 items-center">
                        {
                            !loading ? 
                            <div className="div flex gap-3 items-center">
                            <Stars stars={stars} />
                            <span>({reviews} customer reviews)</span>
                                </div> :
                                <Skeleton variant='text' animation='wave' width={200} />
                        }
                    </div>
                    <div className="price text-[#ab7a5f] text-2xl my-2">{!loading ? formatPrice(price) : <Skeleton variant='text' animation='wave' width={130} />}</div>
                    <p className='max-w-[450px] h-[180px] flex items-center'>{!loading ? description : <Skeleton variant='text' animation='wave' height={300} width={400} />}</p>
                    <div className="moreInfo my-4 flex gap-4">
                        <span className='text-[#324d67] font-bold'>Available : </span>
                        {loading ? <Skeleton variant='text' animation='wave' width={100}/> : stock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </div>
                    <div className="moreInfo my-4 flex gap-4">
                    <span className='text-[#324d67] font-bold'>SKU : </span>
                        {!loading ? sku : <Skeleton variant='text' animation='wave' width={150}/>}
                    </div>
                    <div className="moreInfo my-4 flex gap-4">
                    <span className='text-[#324d67] font-bold'>Brand : </span>
                        {!loading ? company : <Skeleton variant='text' animation='wave' width={50}/>}
                    </div>

                    <hr style={{ backgroundColor: '#bcccdc', width: '100%', height: '2px' }} />
                
                    
                    {loading ? '' : stock > 0 && <AddToCard  {...product} product={product} />}
                    
                </div>
            </div>
            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'right' }} dir='up' open={notify} autoHideDuration={3000} >
                <Alert  severity="success" sx={{ width: '100%' }}>
                    Added To Cart
                </Alert>
            </Snackbar>
    </section>
  )
}

export default SingleProductPage