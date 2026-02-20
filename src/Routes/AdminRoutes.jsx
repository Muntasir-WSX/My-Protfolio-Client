import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';

import Loader from '../SharedComponents/Loader/Loader';
import { AuthContext } from '../AuthProvider/Authprovier';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
       <Loader></Loader>
    }

   
    if (user && user.email === 'alimuntasir2001@gmail.com') {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;