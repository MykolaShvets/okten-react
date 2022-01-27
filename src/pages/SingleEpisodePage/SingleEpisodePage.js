import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import './SingleEpisodePage.css'
import {episodeService} from "../../services/episode.service";
import CurrentEpisode from "../../components/CurrentEpisode/CurrentEpisode";
import EpisodeCharacters from "../../components/EpisodeCharacters/EpisodeCharacters";

const SingleEpisodePage = () => {

    const {state} = useLocation()

    const {id} = useParams();

    const [currentEpisode, setCurrentEpisode] = useState({});

    useEffect(() => {
        if (state) {
            setCurrentEpisode(state)
            return
        }
        episodeService.getById(id).then(value => setCurrentEpisode({...value}))
    }, [])

    return (<div>
        <div className={'episode__info'}>
            <CurrentEpisode currentEpisode={currentEpisode}/>
        </div>
        <h2>Characters:</h2>
        {currentEpisode.characters && <EpisodeCharacters episodeCharacters={currentEpisode.characters}/>}

    </div>);
};

export default SingleEpisodePage;
