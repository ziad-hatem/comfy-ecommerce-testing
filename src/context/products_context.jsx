import React from 'react'
import { useReducer } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import products_Reducer from '../reducers/products_Reducer'
const product_Url = 'https://course-api.com/react-store-products'
const single_Product_Url = 'https://course-api.com/react-store-product'
const ProductContext = React.createContext()

import {
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR
} from '../reducers/actions'

const INITIAL_STATE = {
    product_Loading: false,
    products: [],
    error: false,
    featured_products: [],
}

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(products_Reducer, INITIAL_STATE)
    const fetchData = async () => {
        dispatch({type: GET_SINGLE_PRODUCT_BEGIN})
        try {
            const request = await axios.get(product_Url)
            const response = await request.data
            dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: response})
        } catch (error) {
            dispatch({type: GET_SINGLE_PRODUCT_ERROR})
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <ProductContext.Provider value={{...state}}>
            {children}
    </ProductContext.Provider>
  )
}
export const UseProductsProvider = () => {
    return React.useContext(ProductContext)
}
