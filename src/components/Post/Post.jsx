import React from 'react';

const Post = ({post:{userId, id, title, body}}) => {

    return (
        <div>
            <h1>{id}. {title}</h1>
            <h3>From user - {userId}</h3>
            <p>{body}</p>

        </div>
    );
};

export default Post;
