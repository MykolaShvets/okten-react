import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {ADD_TODO} from "../../store/todo.slice";

const Form = () => {

    const dispatch = useDispatch()

    const {handleSubmit, register, reset} = useForm();

    const submit = (data) => {
        dispatch(ADD_TODO({data}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('task')} placeholder={'ADD TODO'}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export {Form};
