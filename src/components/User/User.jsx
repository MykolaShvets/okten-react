import React from 'react';

const User = ({user:{id, name, email}, getUserId}) => {
    return (
        <div>
            <h1>{id}. {name}</h1>
            <h3>{email}</h3>
            <button onClick={() => getUserId(id)}>Get details</button>
        </div>
    );
};

export default User;
