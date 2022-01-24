import React from 'react';

import './Car.css';
import {carService} from "../../services/cars.service";

const Car = ({car, update, setCarForUpdate}) => {

    const {id, model, price, year} = car;

    const deleteCar = (id) => {
        carService.deleteById(id).then(value => update(value));

    }


    return (
        <div className={'car__wrap'}>
            <div>
                <h2>{id}.</h2>
                <h3> model: {model}</h3>
                <h3> price: {price}</h3>
                <h3> year: {year}</h3>
                <button onClick={() => setCarForUpdate(car)}>Update</button>
                <button onClick={() => deleteCar(id)}>Delete</button>
            </div>

        </div>
    );
};

export default Car;
