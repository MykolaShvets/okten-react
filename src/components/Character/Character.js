import React from 'react';

import './Character.css'

const Character = ({character}) => {

    const {id, name, status, species, gender, origin, location, image, created} = character

    return (
        <div className={'character'}>
            <div>
                <img src={image} alt={name}/>
            </div>
            <div>
                <h2>{id}. {name}.</h2>
                <ul>
                    <li>Status: {status};</li>
                    <li>Species: {species};</li>
                    <li>Gender: {gender};</li>
                    <li>Origin: {origin.name};</li>
                    <li>Location: {location.name};</li>
                    <li>Created: {created};</li>
                </ul>
            </div>
        </div>
    );
};

export default Character;
