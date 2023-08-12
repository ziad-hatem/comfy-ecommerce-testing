import React from 'react'
import { UseCartContext } from '../context/cart_context'

const CartPage = () => {
    const { cart } = UseCartContext()
    if (cart.length < 1) {
        return <section className='h-screen w-full mt-24'>
            <h4>Nothing in Cart</h4>
        </section>
    }
  return (
      <section>
          
    </section>
  )
}

export default CartPage