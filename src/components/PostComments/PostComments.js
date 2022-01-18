import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {useParams} from "react-router-dom";
import PostComment from "../PostComment/PostComment";

const PostComments = () => {

    const [comments, setComments] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        postService.getPostComments(id).then(value => setComments([...value]))
    }, [id])

    return (
        <div>
            {comments.map(comment => <PostComment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostComments;
