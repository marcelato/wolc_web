import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import  AutoProvider  from './CartProvider';

export  const PrivateRoute = ({ children }) => {
  const { jwt } = useContext(AutoProvider)

  return jwt ? children : <Navigate to="/login" />;
};