import React, {useEffect, useState} from 'react';

import {carService} from "../../services/cars.service";
import Car from "../Car/Car";

const Cars = ({trigger, deleteCar, update}) => {

    const [cars, setCars] = useState([]);

    useEffect(()=> {
        carService.getAll().then(value => setCars([...value]));
    }, [trigger]);

    return (
        <div>
            {cars.map(car => <Car update={update} key={car.id} car={car} deleteCar={deleteCar}/>)}
        </div>
    );
};

export default Cars;
