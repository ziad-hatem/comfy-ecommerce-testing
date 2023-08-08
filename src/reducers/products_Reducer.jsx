import React from 'react'
import { GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_SUCCESS } from './actions'


const products_Reducer = (state, action) => {
    if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
        return {
            product_Loading: true,
        }
    }
    if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
        const featuredProducts = action.payload.filter(
            (product) => product.featured === true
        )
        return {
            ...state,
            product_Loading: false,
            products: action.payload,
            featured_products: featuredProducts,
         }
    }
    if (action.type === GET_SINGLE_PRODUCT_ERROR) {
        return {
            product_Loading: false,
            error: true
        }
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_Reducer