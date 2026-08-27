import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({

    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos = [...state.todos, action.payload];
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        completeTodo(state, action) {
            const todoFind = state.todos.find((todo) => todo.id === action.payload.id)

            if (todoFind) {
                todoFind.completed = !todoFind.completed;
            }
        }
    }
})

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer; 
