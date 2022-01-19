import React from 'react';
import {Link} from "react-router-dom";

const UserAlbum = ({album}) => {

    const {id, title} = album;

    return (
        <Link to={id.toString()}>
            <h4>{id}. {title}</h4>
        </Link>
    );
};

export default UserAlbum;
