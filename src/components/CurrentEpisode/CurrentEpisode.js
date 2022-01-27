import React from 'react';

const CurrentEpisode = ({currentEpisode}) => {

    const {id, name, air_date, episode} = currentEpisode

    return (<div>
            <h2>{id}. {name}.</h2>
            <h3>Air date: {air_date}</h3>
            <h3>Episode: {episode}</h3>

        </div>);
};

export default CurrentEpisode;
