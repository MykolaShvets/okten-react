import React from 'react';

import s from './Comment.module.css'

const Comment = ({comment: {postId, id, name, email, body}}) => {
    return (
        <div className={s.comment}>
            <h2>{id}. {name}</h2>
            <h4>To post: {postId}</h4>
            <h4>From: {email}</h4>
            <p>{body}</p>
        </div>
    );
};

export {Comment};
