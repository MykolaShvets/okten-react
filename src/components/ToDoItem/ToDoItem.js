import React from 'react';
import {useDispatch} from "react-redux";

import {COMPLETED, DELETE_TODO} from "../../store/todo.slice";

const ToDoItem = ({todo}) => {

    let {id, date, isCompleted, task} = todo

    const dispatch = useDispatch();

    const check = (e) => {
        const isDone = e.target.checked
        dispatch(COMPLETED({isDone, id}))
    }

    return (
        <div className={isCompleted? 'todo completed' : 'todo'}>
            <form>
                <input type="checkbox" onChange={check}/>
            </form>
            <h2 >{task}</h2>
            <h3>{date}</h3>
            <button onClick={() => dispatch(DELETE_TODO({id}))}>Delete</button>
        </div>
    );
};

export {ToDoItem};
