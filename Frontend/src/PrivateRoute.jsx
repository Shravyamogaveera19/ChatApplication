import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from './services/auth.service';

const PrivateRoute = ({ children }) => {
  const user = authService.getCurrentUser();
  return user ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
