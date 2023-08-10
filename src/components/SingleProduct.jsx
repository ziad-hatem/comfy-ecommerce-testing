import React from 'react'
import { formatPrice } from '../reducers/helpers';
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom';

export const SingleProduct = ({ image, name, price, id }) => {
  return (
      <div className="product w-[300px]">
      <div
        className="image w-[300px] relative flex justify-center items-center"
      >
        <img src={image} loading='lazy' className=' w-[300px] h-[200px]' />
        <div
          className="overlay w-full duration-500	 absolute top-0 h-full z-[2] transition opacity-0"
          style={{backgroundColor: 'rgba(34, 34, 34, 0.5)'}}
        ></div>
        <Link to={`/products/${id}`}
          className="searchOverlay duration-500	 cursor-pointer z-10 absolute transition opacity-0 rounded-full text-white text-3xl bg-[#ab7a5f] p-2">
            <AiOutlineSearch />
          </Link>
          </div>
          <div className="info w-[300px] flex justify-between mt-3">
              <h4 className='font-normal first-letter:uppercase text-[#102a42]'>{ name }</h4>
              <h4 className='text-[#ab7a5f] font-normal'>{ formatPrice(price) }</h4>
          </div>
    </div>
  )
}
