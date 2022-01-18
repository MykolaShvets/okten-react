import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Link, Outlet} from "react-router-dom";
import {postService} from "../../services/post.service";

const PostDetails = () => {

    const [post, setPost] = useState(null);

    const {state} = useLocation();

    const {id} = useParams();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({value}))
    }, [id])


    return (
        <div>
            {post && (
                <div>
                    <div className={'details'}>
                        <h2>{post.id}. {post.title}</h2>
                        <h3>From user with id: {post.userId}</h3>
                        <p>{post.body}</p>
                        <Link to={'comments'} className={'btn'}> Show comments </Link>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostDetails;
