import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarThunk, getCarForUpdate} from "../../store/car.slice";

import s from './Car.module.css'

const Car = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div className={s.car}>
            <h2>Model: {model}, {id}</h2>
            <h3>Model: {price}</h3>
            <h3>Model: {year}</h3>
            <div className={s.btns}>
                <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
                <button onClick={() => dispatch(getCarForUpdate({car}))}>Update</button>
            </div>
        </div>
    );
};

export {Car};
