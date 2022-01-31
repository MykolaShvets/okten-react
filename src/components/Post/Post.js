import React from 'react';

import s from './Post.module.css'

const Post = ({post: {userId, id, title, body}}) => {
    return (
        <div className={s.post}>
            <h2>{id}. {title}</h2>
            <h3>From user: {userId}</h3>
            <p>{body}</p>
        </div>
    );
};

export {Post};
