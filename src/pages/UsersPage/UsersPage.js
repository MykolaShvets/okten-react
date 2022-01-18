import React from 'react';
import {Outlet} from 'react-router-dom'

import Users from "../../components/Users/Users";


const UsersPage = () => {
    return (
        <div className={'page__wrapper'}>
            <div className={'left'}>
            <h1>Users</h1>
                <Users/>
            </div>
            <div className={'right'}>
                <Outlet/>
            </div>


        </div>
    );
};

export default UsersPage;
