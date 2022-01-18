import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserPost from "../UserPost/UserPost";

const UserPosts = () => {
    const [posts, setPosts] = useState([]);

    const {id} = useParams()

    useEffect(() => {
        userService.getUserPosts(id).then(value => setPosts([...value]))
    }, [id])


    return (
        <div>
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPosts;
