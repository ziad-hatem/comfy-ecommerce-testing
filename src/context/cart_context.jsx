import React, { useReducer } from 'react'
import cartReducer from '../reducers/cart_Reducer'
import { ADD_TO_CART } from '../reducers/actions'
import { redirect, Navigate } from 'react-router-dom'
const CartContext = React.createContext()

const initialState = {
    cart: [],
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534
}    


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    const addToCart = (id, color, amount, product) => {
        dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
        return () => <Navigate to='/' />
    }
  return (
      <CartContext.Provider value={{...state, addToCart}}>
          {children}
      </CartContext.Provider>
  )
}

export const UseCartContext = () => {
    return React.useContext(CartContext)
}