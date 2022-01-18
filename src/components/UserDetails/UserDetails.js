import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams, Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";


const UserDetails = () => {


    const [user, setUser] = useState(null);

    const {state} = useLocation();

    const {id} = useParams();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    }, [id])



    return (
        <div>
            {user && (
                <div>
                    <div className={'details'}>
                        <h2>{user.id}. {user.name}</h2>
                        <h3>Username: {user.username}</h3>
                        <h3>Email: {user.email}</h3>
                        <ul className={'address'}>
                            <h4>Address:</h4>
                            <li>{user.address.street}</li>
                            <li>{user.address.suite}</li>
                            <li>{user.address.city}</li>
                        </ul>
                        <Link className={'btn'} to={'posts'}>Show posts</Link>
                    </div>
                    <div>
                            <Outlet/>
                    </div>
                </div>

            )}
        </div>
    );
};

export default UserDetails;
