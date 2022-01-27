import React, {useEffect, useState} from 'react';

import './EpisodeCharacters.css'
import {characterService} from "../../services/character.service";
import Character from "../Character/Character";

const EpisodeCharacters = ({episodeCharacters}) => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        characterService
            .getById(episodeCharacters.map(character => character.slice(character.lastIndexOf('/') + 1)).join())
            .then(value => setCharacters(value))


    }, [])

    return (<div className={'characters'}>
        {characters.map(character => <Character key={character.id} character={character}/>)}
    </div>);
};

export default EpisodeCharacters;
