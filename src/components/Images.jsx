import React, { useState } from 'react'

const Images = ({ images = [{ url: '' }] }) => {
    const [mainImg, setMainImg] = useState(images[0])
  return (
      <div className='w-full h-full md:w-[70%] md:h-[80%] flex flex-col object-cover'>
          <img src={mainImg.url} alt="main img" className='w-[100%] h-[500px] object-cover' />
          <div className="otherImages w-full flex flex-wrap md:gap-4 md:justify-start mt-10 justify-start gap-3">
          {images.map((image, index) => {
              return <img
                  src={image.url}
                  alt={image.filename}
                  key={index}
                  className={`${image.url === mainImg.url ? 'activeImg' : ''}  my-2 w-[120px] h-[90px] object-cover cursor-pointer`}
                  onClick={() => setMainImg(images[index])}
              />
          })}
        </div>
    </div>
  )
}

export default Images