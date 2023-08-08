import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import {AiOutlineUserAdd, AiOutlineUserDelete} from 'react-icons/ai'
import { useUserContext } from '../context/usercontext'
const CardButton = () => {
  const {loginWithRedirect, isAuthenticated, logout} = useUserContext()
  return (
    <div className="CardButton" onClick={() => {
      isAuthenticated ? logout({returnTo:window.location.origin}) : loginWithRedirect()
    }}>
    <h3 style={{color: '#102a42'}} className='flex items-center text-2xl gap-1 cursor-pointer'>
        {
          isAuthenticated ? 'Logout' : 'Login'
        }
      <span>
        {
            isAuthenticated ? <AiOutlineUserDelete /> : <AiOutlineUserAdd />
        }
      </span>
    </h3>
  </div>
  )
}

export default CardButton;
