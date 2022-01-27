import React, {useEffect, useState} from 'react';

import './Episodes.css'
import {episodeService} from "../../services/episode.service";
import Episode from "../Episode/Episode";

const Episodes = () => {


    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {
        episodeService.getAll().then(value => {
            setEpisodes(value.results);
            setInfo(value.info);
        })
    }, []);


    const prev = (page) => {
        episodeService.getByPage(page).then(value => {
            setEpisodes(value.results);
            setInfo(value.info);
        })
    };

    const next = (page) => {
        episodeService.getByPage(page).then(value => {
            setEpisodes(value.results);
            setInfo(value.info);
        })
    };


    return (<div>
        <div className={'episodes'}>
            {episodes.map(singleEpisode => <Episode key={singleEpisode.id} singleEpisode={singleEpisode}/>)}
        </div>
        <div className={'buttons'}>
        {info.prev ? <button onClick={() => prev(info.prev)}> Prev </button> : <button disabled>Prev</button>}
        {info.next ? <button onClick={() => next(info.next)}> Next </button> : <button disabled>Next</button>}
        </div>
    </div>);
};

export default Episodes;
