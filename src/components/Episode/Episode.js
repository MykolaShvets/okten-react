import React from 'react';
import {Link} from "react-router-dom";

import './Episode.css'

const Episode = ({singleEpisode}) => {

    const {id, name, air_date, episode} = singleEpisode

    return (<div className={'episode'}>
        <div className={'info'}>
            <h2>{id}. {name}.</h2>
            <h3>Air date: {air_date}.</h3>
            <h3>Episode: {episode}</h3>
        </div>

        <div className={'link'}>
            <Link to={id.toString()} state={singleEpisode}>Episode detail</Link>
        </div>
    </div>);
};

export default Episode;
