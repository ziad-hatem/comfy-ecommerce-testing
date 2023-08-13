import React from 'react';
import { useUserContext } from '../context/usercontext';
import { Route, redirect } from 'react-router-dom';
const ProtectedRoute = ({ component, ...rest }) => {
    console.log(component);
    console.log(args);
    const {myUser} = useUserContext()
    return <Route {...rest} render={() => {
      return myUser ? component : redirect('/')
  }}></Route>;
};

export default ProtectedRoute
