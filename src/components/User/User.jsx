import React from 'react';

const User = ({user: {id, name, username, email}}) => {
    return (
        <div>
            <h1>{id}. {name}.</h1>
            <h2>{username}</h2>
            <h3>{email}</h3>
        </div>
    );
};

export default User;
