import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({

    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {

        }, 
        deleteTodo(state, action) {

        }, 
        completeTodo(state, action) {

        }
    }
})

export const {addTodo, completeTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer; 
