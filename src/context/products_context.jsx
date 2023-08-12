import React from 'react'
import { useReducer } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import products_Reducer from '../reducers/products_Reducer'
const products_Url = 'https://course-api.com/react-store-products'
const single_Product_Url = 'https://course-api.com/react-store-single-product?id='
const ProductContext = React.createContext()
import { useParams } from 'react-router-dom'
import {
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../reducers/actions'

const INITIAL_STATE = {
    product_Loading: false,
    products: [],
    productsError: false,
    featured_products: [],
    single_Product: [],
    productsErrorMsg: '',
    singleProductError: false,
    singleProductErrorMsg: ''
}

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(products_Reducer, INITIAL_STATE)
    const id = useParams()
    const fetchData = async () => {
        dispatch({type: GET_PRODUCTS_BEGIN})
        try {
            const request = await axios.get(products_Url)
            const response = await request.data
            dispatch({type: GET_PRODUCTS_SUCCESS, payload: response})
        } catch (error) {
            dispatch({type: GET_PRODUCTS_ERROR})
        }
    }

    const fetchSingleProduct = async (url) => {
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
        try {
            const request = await axios.get(url)
            const response = await request.data;
            dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: response})
        } catch (error) {
            dispatch({type: GET_SINGLE_PRODUCT_ERROR, payload: error})
        }
    }

    
    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <ProductContext.Provider value={{...state, fetchSingleProduct}}>
            {children}
    </ProductContext.Provider>
  )
}
export const UseProductsProvider = () => {
    return React.useContext(ProductContext)
}
