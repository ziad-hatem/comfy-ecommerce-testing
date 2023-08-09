import React from 'react'
import { Link } from 'react-router-dom'

const PageHero = ({title}) => {
  return (
      <div className='h-[120px] bg-[#eaded7] w-full top-[68px] relative flex items-center z-20'>
          <div className="path flex left-[100px] relative">
         
              <h1 color='#795744' className='text-4xl font-bold'>
                  <Link to={'/'} className=' cursor-pointer' style={{ color: "#795744" }}>
                      Home
                  </Link> / {title}
              </h1> 
        </div>
    </div>
  )
}

export default PageHero