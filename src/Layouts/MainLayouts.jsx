import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../SharedComponents/NavBar.jsx/NavBar';
import Footer from '../SharedComponents/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;