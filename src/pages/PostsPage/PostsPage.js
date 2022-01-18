import React from 'react';
import {Outlet} from "react-router-dom";

import Posts from "../../components/Posts/Posts";

const PostsPage = () => {
    return (
        <div className={'page__wrapper'}>
            <div className={'left'}>
                <h1>Posts</h1>
                <Posts/>
            </div>
            <div className={'right'}>
                <Outlet/>
            </div>


        </div>
    );
};

export default PostsPage;
