import React, {useState} from 'react';

import './Car.css';
import UpdateForm from "../UpdateForm/UpdateForm";
import {carService} from "../../services/cars.service";

const Car = ({car: {id, model, price, year}, deleteCar, update}) => {

    const [currentCar, setCurrentCar] = useState(null);

    const getCurrentCar = (id) =>{
        carService.getById(id).then(value => setCurrentCar(value))
    }

    return (
        <div className={'car__wrap'}>
            <div>
                <h2>{id}.</h2>
                <h3> model: {model}</h3>
                <h3> price: {price}</h3>
                <h3> year: {year}</h3>
                <button onClick={() => deleteCar(id)}>Delete</button>
                <button onClick={() => getCurrentCar(id)}>Update</button>
            </div>
            <div>
                {currentCar && <UpdateForm update={update} car={currentCar}/>}
            </div>

        </div>
    );
};

export default Car;
