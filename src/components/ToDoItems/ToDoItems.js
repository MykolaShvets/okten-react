import React from 'react';
import {useSelector} from "react-redux";

import {ToDoItem} from "../ToDoItem/ToDoItem";

const ToDoItems = () => {

   const {todos} = useSelector(state => state['todoReducer'])

    return (
        <div className={'todos'}>
            {todos.map(todo => <ToDoItem key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {ToDoItems};
