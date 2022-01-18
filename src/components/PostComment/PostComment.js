import React from 'react';

const PostComment = ({comment:{id, name, email, body}}) => {
    return (
        <div>
            <h2>{id}. {name}</h2>
            <h5>From email {email}</h5>
            <p>{body}</p>
        </div>
    );
};

export default PostComment;
