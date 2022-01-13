import React, {useEffect, useState} from 'react';

import './Users.css'
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import Post from "../Post/Post";
import {userServices} from "../../services/user.services";
import {postServices} from "../../services/post.services";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
            userServices.getAll()
            .then(value => setUsers(value))
    }, []);

    const getUserId = (id) => {
        userServices.getById(id)
            .then(value => setUser(value))
    };

    const getUserPosts = (id) => {
        postServices.getPostsByUserId(id)
            .then(value => setPosts(value))
    };

    return (
        <div>
            <div className={'top'}>
                <div className={'users'}>
                    {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}
                </div>
                <div className={'details'}>
                    {user && <UserDetails key={user.id} user={user} getUserPosts={getUserPosts}/>}
                </div>
            </div>

            <div className={'posts'}>
                {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            </div>

        </div>
    );
};

export default Users;
