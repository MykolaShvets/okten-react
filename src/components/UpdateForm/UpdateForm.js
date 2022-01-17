import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/car.validator";
import {carService} from "../../services/cars.service";

const UpdateForm = ({update, car}) => {

    const [updateFormError, setUpdateFormError] = useState({});

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode:'onTouched'});

    const updateCar = (id, car) => {
        carService.updateById(id, car).then(value => update(value)).catch(error => setUpdateFormError(error.response.data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(updateCar)}>
                <div>
                    <label>Model: <input type="text" defaultValue={car.model} {...register('model')}/></label>
                    {errors.model && <span>{errors.model.message}</span>}
                </div>
                <div>
                    <label>Price: <input type="text" defaultValue={car.price} {...register('price')}/></label>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div>
                    <label>Year: <input type="text" defaultValue={car.year} {...register('year')}/></label>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <button>Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;
