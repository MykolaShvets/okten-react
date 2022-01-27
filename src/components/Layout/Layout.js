import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './Layout.css'

const Layout = () => {
    return (<div>
        <header>
            <Link to={'/'}> Rick&Morty </Link>
        </header>
        <div className={'container'}>
            <Outlet/>
        </div>
    </div>);
};

export default Layout;
