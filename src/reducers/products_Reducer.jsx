import React from 'react'
import {
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from './actions'


const products_Reducer = (state, action) => {

    switch (action.type) {
        case GET_PRODUCTS_BEGIN:
            return {
                product_Loading: true,
                error: false
            }
            break;
        case GET_PRODUCTS_SUCCESS:
            const featuredProducts = action.payload.filter(
                (product) => product.featured === true
            )
            return {
                ...state,
                product_Loading: false,
                products: action.payload,
                featured_products: featuredProducts,
            }
            break;
        case GET_PRODUCTS_ERROR:
            return {
                product_Loading: false,
                error: true
            }
            break;
        case GET_SINGLE_PRODUCT_BEGIN:
            return {
                product_Loading: true,
                error: false
            }
            break;
        case GET_SINGLE_PRODUCT_ERROR:
            return {
                product_Loading: false,
                error: true
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                product_Loading: false,
                error: true,
                single_Product: action.payload
            }
            break;
        default:
            throw new Error(`No Matching "${action.type}" - action type`)
    }

}

export default products_Reducer