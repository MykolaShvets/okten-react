import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import './Posts.css'


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])


    return (
        <div className={'posts__wrapp'}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;
