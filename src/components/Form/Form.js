import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import s from './Form.module.css'
import carReducer, {createCar, updateCarThunk} from "../../store/car.slice";
import {CarValidator} from "../../validators/car.validator";

const Form = () => {

    const {carForUpdate: {id, model, price, year}} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id])


    const {handleSubmit, register, reset, setValue, formState:{errors}} = useForm({resolver: joiResolver(CarValidator), mode:'onTouched'});


    const submit = (data) => {
        if (id) {
            dispatch(updateCarThunk({data, id}))
            return
        }
        dispatch(createCar({data}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={s.form}>
            <label> Model: <input type="text" defaultValue={''} {...register('model')} />
            {errors.model && <p className={s.error}>{errors.model.message}</p>}</label>
            <label> Price: <input type="text" defaultValue={''} {...register('price')}/>
            {errors.price && <p className={s.error}>{errors.price.message}</p>}</label>

            <label> Year: <input type="text" defaultValue={''} {...register('year')}/>
            {errors.year && <p className={s.error}>{errors.year.message}</p>}</label>

            <button>{id ? "Update" : "Save"}</button>
        </form>
    );
};

export {Form};
