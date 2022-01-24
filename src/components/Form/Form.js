import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/cars.service";
import {CarValidator} from "../../validators/car.validator";

const Form = ({update, carForUpdate: {id, model, price, year}}) => {

    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, formState: {errors}, setValue
    } = useForm({resolver: joiResolver(CarValidator), mode:'onTouched'});

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id])

    const submit = async (car) => {
        try{
            let newCar;

            if(id){
                newCar = await carService.updateById(id, car)
            }else {
                newCar = await carService.create(car)
            }

            update(newCar)

        }catch (error){
            setFormError(error.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                    {errors.model && <span>{errors.model.message}</span>}
                </div>
                <div>
                    <label>Price: <input type="text" defaultValue={''} {...register('price')}/></label>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div>
                    <label>Year: <input type="text" defaultValue={''} {...register('year')}/></label>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <button>{id? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Form;
