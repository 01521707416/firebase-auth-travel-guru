import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

const LoginLayout = () => {

    /* This is the layout for login page */

    return (
        <div>
            <Header></Header>
            <Toaster />
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;