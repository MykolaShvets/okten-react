import React from 'react';

const Comment = ({comment:{postId, id, name, email, body}}) => {
    return (
        <div>
            <h1>{id}. {name}</h1>
            <h2>{email}</h2>
            <h3>To post - {postId}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;
