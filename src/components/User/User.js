import React from 'react';

import s from './User.module.css'

const User = ({user:{id, name, username, email, phone, website}}) => {
    return (
        <div className={s.user}>
            <h2>{id}. {name}</h2>
            <h3><span className={s.span}>Username:</span> {username}</h3>
            <h4><span className={s.span}>Email:</span> {email}</h4>
            <h4><span className={s.span}>Phone:</span> {phone}</h4>
            <h4><span className={s.span}>Website:</span> {website}</h4>
        </div>
    );
};

export {User};
