import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div>
          <Link to={id.toString()} state={user}>  <p>{id}. {name}</p> </Link>

        </div>
    );
};

export default User;
