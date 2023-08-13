import React, { useState } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Images = ({ images = [{ url: '' }] }) => {

  return (
    <div className="slide-container w-full h-full md:w-[70%] md:h-[100%] flex flex-col object-cover">
        <Slide cssClass='w-full h-full'>
         {images.map((image, index)=> (
            <div key={index} className='w-full h-[650px] object-cover flex flex-wrap md:gap-4 md:justify-start justify-start gap-3'>
              <div className='my-2 w-full h-full object-cover cursor-pointer' style={{'backgroundImage': `url(${image.url})`, backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center center' }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    //   <div className='w-full h-full md:w-[70%] md:h-[80%] flex flex-col object-cover'>
    //       <img src={mainImg.url} alt="main img" className='w-[100%] h-[500px] object-cover' />
    //       <div className="otherImages w-full flex flex-wrap md:gap-4 md:justify-start mt-10 justify-start gap-3">
    //       {images.map((image, index) => {
    //           return <img
    //               src={image.url}
    //               alt={image.filename}
    //               key={index}
    //               className={`${image.url === mainImg.url ? 'activeImg' : ''}  my-2 w-[120px] h-[90px] object-cover cursor-pointer`}
    //               onClick={() => setMainImg(images[index])}
    //           />
    //       })}
    //     </div>
    // </div>
  )
}

export default Images