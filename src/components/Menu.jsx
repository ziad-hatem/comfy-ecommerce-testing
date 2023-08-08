import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import {UseGlobalContext} from '../components/UseGlobalContext';

const Menu = ({sideBar, setSideBar}) => {
  return (
    <div
    className="menu md:hidden"
    onClick={() => setSideBar(!sideBar)}
  >
    <AiOutlineMenu
      className='text-2xl cursor-pointer'
      style={{
        color: '#ab7a5f'
      }}
    />
  </div>
  )
}

export default Menu