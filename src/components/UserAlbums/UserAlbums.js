import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserAlbum from "../UserAlbum/UserAlbum";

const UserAlbums = () => {

    const [userAlbums, setUserAlbums] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        userService.getUserAlbums(id).then(value => setUserAlbums([...value]))
    }, [id])


    return (
        <div>
            <div>
                <h2>Albums:</h2>
                {userAlbums.map(album => <UserAlbum key={album.id} album={album}/>)}
            </div>
            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export default UserAlbums;
