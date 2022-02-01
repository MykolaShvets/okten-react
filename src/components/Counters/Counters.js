import React from 'react';
import {useSelector} from "react-redux";

const Counters = () => {
    const {todos, completed} = useSelector(state => state['todoReducer']);


    return (
        <div>
            <h1>All: {todos.length} / Completed {completed.length}</h1>
        </div>
    );
};

export {Counters};
