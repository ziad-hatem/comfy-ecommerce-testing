import React from 'react'


const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
    const heloo = 'asdf'
  return (
      <CartContext.Provider value={{heloo}}>
          {children}
      </CartContext.Provider>
  )
}

export const UseProductsContext = () => {
    return React.useContext(CartContext)
}