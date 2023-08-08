import React from 'react'

export const SingleProduct = ({image, name, price}) => {
  return (
      <div className="product w-[300px]">
          <div className="image w-[300px]">
              <img src={image} loading='lazy' className='w-[300px] h-[200px]' />
          </div>
          <div className="info w-[300px] flex justify-between">
              <h4>{ name }</h4>
              <h4>${ price }</h4>
          </div>
    </div>
  )
}
