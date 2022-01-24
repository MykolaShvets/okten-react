import React, {useEffect, useState} from 'react';

import {carService} from "../../services/cars.service";
import Car from "../Car/Car";

const Cars = ({trigger, update, setCarForUpdate}) => {

    const [cars, setCars] = useState([]);

    useEffect(()=> {
        carService.getAll().then(value => setCars([...value]));
    }, [trigger]);

    return (
        <div>
            {cars.map(car => <Car update={update} key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;
