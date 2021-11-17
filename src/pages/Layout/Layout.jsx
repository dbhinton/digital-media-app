import Header from '../../components/Header/Header'
import { Outlet } from "react-router-dom";
import Footer from '../../components/Footer/Footer'

import React from 'react';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
