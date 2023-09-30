import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    console.log('User in private route: ', user)

    /* Handle loading */
    if (loading) {
        <Spinner animation="border" role="status"></Spinner>
    }

    /* Handle user status */
    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to='/login' ></Navigate >
};

export default PrivateRoute;