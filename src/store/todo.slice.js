import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: [],
        completed: []
    },
    reducers: {
        ADD_TODO: (state, action) => {
            state.todos.push({
                id: new Date().getTime(),
                date: `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`,
                isCompleted: false,
                ...action.payload.data
            })
        },
        DELETE_TODO: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
            state.completed = state.completed.filter(todo => todo.id !== action.payload.id)
        },
        COMPLETED: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[index].isCompleted = action.payload.isDone
            state.completed = state.todos.filter(todo => todo.isCompleted === true)
        }
    }
})

const todoReducer = todoSlice.reducer;

export const {ADD_TODO, DELETE_TODO, COMPLETED} = todoSlice.actions;

export default todoReducer
