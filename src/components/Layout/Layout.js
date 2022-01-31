import React from 'react';
import {Outlet} from "react-router-dom";

import s from './Layout.module.css'
import {Header} from "../Header/Header";

const Layout = () => {
    return (
        <div>
          <header>
              <Header/>
          </header>
            <main className={s.wrapp}>
                <Outlet/>
            </main>
        </div>
    );
};

export {Layout};
