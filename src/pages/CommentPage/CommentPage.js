import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getComments} from "../../store/comment.slice";
import {Comment} from "../../components/Comment/Comment";

const CommentPage = () => {

    const {comments} =useSelector (state => state['commentReducer'])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComments())
    }, [])


    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentPage};
