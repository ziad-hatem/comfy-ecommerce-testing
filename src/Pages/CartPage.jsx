import React from 'react'
import { UseCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartContent from '../components/CartContent'
import PageHero from '../components/PageHero'

const CartPage = () => {
    const { cart } = UseCartContext()
    if (cart.length < 1) {
        return <section className='h-[96vh] flex flex-col items-center justify-center gap-8 text-center w-full'>
          <h4 className='text-3xl font-bold'>Your Cart is empty</h4>
          <Link to='/products' >
            <h3 className='font-semibold tracking-[2px] p-1 w-24 text-white bg-[#ab7a5f]'>Fill iT</h3>
          </Link>
        </section>
    }
  return (
    <section>
          <PageHero title={'Cart'} />
          <CartContent />
    </section>
  )
}

export default CartPage