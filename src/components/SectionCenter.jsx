import React from 'react'
import { Link } from 'react-router-dom'
import mainImg from '../assets/hero-bcg-2.jpeg'
import SecondImg from '../assets/hero-bcg.jpeg'
export const SectionCenter = () => {
  return (
    <div className='contain flex mt-32 justify-evenly relative'>

    <div className="info lg:w-fit flex flex-col gap-9 justify-center translate-x-12">

      <div className="title text-5xl font-bold text-[#102a42]">
      Design Your
        <br/>
      Comfort Zone
      </div>

      <p className="text lg:w-96 w-3/4 text-[#617d98] leading-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
        at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
        aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
      </p>

      <Link className='bg-[#ab7a5f] text-white tracking-[0.15em] p-4 transition rounded-md w-40 text-center hover:bg-[#bd7a57]'>SHOP NOW</Link>
    </div>

    <div className="images items-end relative hidden lg:flex">
      <img src={mainImg} className='after h-44 absolute z-10 right-72' alt="main img" />
      <img src={SecondImg} className='rounded-md relative' width={'400px'} alt="second img" />
    </div>

  </div>
  )
}
