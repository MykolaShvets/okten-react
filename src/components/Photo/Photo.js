import React from 'react';

const Photo = ({photo}) => {

    const {id, title, thumbnailUrl} = photo;
    return (
        <div className={'photo'}>
            <img src={thumbnailUrl} alt="photo"/>
            <h4>{id}. {title}</h4>
        </div>
    );
};

export default Photo;
