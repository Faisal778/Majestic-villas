import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)

    const location = useLocation()
    console.log(location)
    console.log(user)
    if (user) {
        return children
    } 
    return <Navigate to="/signin" state={{ from: location }} replace />;
   

};

export default PrivateRoute;