import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/cars.service";
import {CarValidator} from "../../validators/car.validator";

const Form = ({update}) => {

    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode:'onTouched'});

    const submit = (car) => {
        carService.create(car).then(value => update(value)).catch(error => setFormError(error.response.data))
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
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;
