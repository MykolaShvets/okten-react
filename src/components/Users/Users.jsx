import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {userServices} from "../../services/user.services";




const Users = ({getUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
            userServices.getAll()
            .then(value => setUsers(value))
    }, []);



    return (
        <div>
                    {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}
        </div>
    );
};

export default Users;
