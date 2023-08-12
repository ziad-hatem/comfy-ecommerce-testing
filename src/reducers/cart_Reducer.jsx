import React from 'react'
import { ADD_TO_CART } from './actions'

const cartReducer = (state, action) => {

    if (action.type === ADD_TO_CART) {
        const { id, color, amount, product } = action.payload
        const tempItem = state.cart.find((i) => i.id === id + color)
        if (tempItem) {
            const tempCart = state.cart.map((cardItem) => {
                if (cardItem.id === id + color) {
                    let newAmount = cardItem.amount + amount
                    if (newAmount > cardItem.max) {
                        newAmount = cardItem.max
                    }
                    return { ...cardItem, amount: newAmount }
                } else { 
                    return cardItem
                }
            })
            return {...state, cart: tempCart}
        } else {
            const newItem = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.images[0].url,
                price: product.price,
                max: product.stock
            }
            
            return { ...state, cart: [...state.cart, newItem] }
        }
    }
    
}

export default cartReducer