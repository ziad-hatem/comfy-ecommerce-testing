import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import CardButton from './CardButton'

const Utilits = ({style}) => {
  return (
    <div className="utilits hidden md:flex w-full justify-center md:w-72" style={{display: style}}>
        <div className="card flex gap-4 justify-center">
          <h3 style={{color: '#102a42'}} className='flex relative items-center text-2xl gap-1 cursor-pointer'>
            Cart
          <span className='cart-num'>
              <FaCartShopping />
            </span>
          </h3>
            <CardButton />
        </div>
      </div>
  )
}

export default Utilits