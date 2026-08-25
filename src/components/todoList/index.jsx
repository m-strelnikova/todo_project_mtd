import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import TodoItem from "../todoItem";
import Typography from "@mui/material/Typography";

function TodoList() {

    const todos = useSelector((state) => state.todo.todos);

    return (
        <div>
            <Typography variant="h1">Todo List</Typography>
            <ul>
                {todos.map((todo) => {
                    <li key={todo.id}>
                        <TodoItem todo={todo}/>
                    </li>
                })}
            </ul>
        
        </div>
    )
}
export default TodoList; 