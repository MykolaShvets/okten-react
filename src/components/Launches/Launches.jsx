import React, {useEffect, useState} from 'react';

import Launch from "../Launch/Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value))
    }, [])

    return (
        <div>
            {launches.map(launch => {
                if (launch.launch_year  !== '2020' ){
                   return <Launch key={launch.flight_number} launch={launch}/>
                }
            })}
        </div>
    );
};

export default Launches;
