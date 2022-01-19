import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {albumService} from "../../services/album.service";
import Photo from "../Photo/Photo";

const Photos = () => {

    const [photos, setPhotos] = useState([]);

    const {albumId} = useParams();

    useEffect(() => {
        albumService.getAlbumPhotos(albumId).then(value => setPhotos([...value]))
    }, [albumId]);


    return (
        <div>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default Photos;
