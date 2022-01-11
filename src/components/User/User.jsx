import React from 'react';


const User = ({user:{id, name, surname, email}}) => {

    return (
        <div>
            <h1>{id}. {name} {surname}</h1>
            <h2>{email}</h2>
        </div>
    );
};

export default User;
