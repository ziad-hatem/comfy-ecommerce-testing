import React from 'react'
import Logo from '../components/Logo'
import Links from '../components/Links'
import Utilits from '../components/Utilits'
import  { UseGlobalContext } from '../components/UseGlobalContext';
import Menu from '../components/Menu';
import SideBar from '../components/SideBar';
import { useUserContext } from '../context/usercontext';
import { BarLoader } from 'react-spinners';
const Navbar = () => {
 const [sideBar, setSideBar] = React.useState(false)
 const {isLoading} = useUserContext()
  return (
    <div className="nav fixed top-0 w-full z-50 bg-white">
          <nav className='flex items-center justify-evenly mt-4 relative'>
      <Logo />
      <Menu sideBar={sideBar} setSideBar={ setSideBar }/>
      <Links />
      <Utilits />
      <SideBar show={sideBar} setSide={ setSideBar } />
      
      </nav>
      <div className="loader">
      {isLoading ? <BarLoader width={'100%'} speedMultiplier={0.7} className=' fixed ' color="#36d7b7" /> : ''}
      </div>
    </div>
  )
}

export default Navbar