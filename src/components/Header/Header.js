import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <header>
            <div className={'header__wrapper'}>
                <nav>
                    <ul className={'menu'}>
                        <li className={'menu__item'}>
                            <NavLink to={'/'} > Home </NavLink>
                        </li>
                        <li className={'menu__item'}>
                            <NavLink to={'/users'} > Users </NavLink>
                        </li>
                        <li className={'menu__item'}>
                            <NavLink to={'/posts'} > Posts </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};

export default Header;
