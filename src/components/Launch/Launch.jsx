import React from 'react';
import './Launch.css'

const Launch = ({launch: {mission_name, launch_year, links: {mission_patch_small}}}) => {
    return (
        <div className={'wrapp'}>
            <div className={"title"}>
                <h1>{mission_name}</h1>
                <h2>{launch_year}</h2>
            </div>
            <div className="image">
                <img src={mission_patch_small} alt={mission_name}/>
            </div>
        </div>
    );
};

export default Launch;
