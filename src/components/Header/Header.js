import React from 'react';

import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.wrapper}>
            <ul className={s.menu__list}>
                <li>
                    <NavLink to={'/'}>Cars</NavLink>
                </li>
                <li>
                    <NavLink to={'/users'}>Users</NavLink>
                </li> <li>
                    <NavLink to={'/posts'}>Posts</NavLink>
                </li> <li>
                    <NavLink to={'/comments'}>Comments</NavLink>
                </li>
            </ul>
        </div>
    );
};

export {Header};
