import React from 'react';

import './UserDetails.css'

const UserDetails = ({user: {id, name, username, email, address, phone, website, company}, getUserPosts}) => {
    return (
        <div className={'user_details__wrapp'}>
            <div className={'titles'}>
                <h1>{id}. {name}.</h1>
                <h2>{username}.</h2>
                <h3>{email}</h3>
                <h3>{website}</h3>
                <h3>{phone}</h3>
            </div>
            <ul className={'address'}>
                <h3>Address:</h3>
                <li>{address.street}</li>
                <li>{address.suite}</li>
                <li>{address.city}</li>
                <li>{address.zipcode}</li>
                <ul>
                    <h4>Geo:</h4>
                    <li>{address.geo.lat}</li>
                    <li>{address.geo.lng}</li>
                </ul>
            </ul>
            <ul className={'company'}>
                <h3>Company:</h3>
                <li>{company.name}</li>
                <li>{company.catchPhrase}</li>
                <li>{company.bs}</li>
            </ul>

            <button onClick={() => getUserPosts(id)}>Get posts</button>

        </div>
    );
};

export default UserDetails;
