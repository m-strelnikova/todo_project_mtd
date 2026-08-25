import { useDispatch } from "react-redux";
import { useState } from "react";
import { completeTodo, deleteTodo } from "../../redux/slices/todoSlice";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function TodoItem({ todo }) {


    return (
        <div>
            <Typography variant="p"> {todo.todo}</Typography>
            <Button
                variant="contained"
                color="info"
                style={{ textTransform: 'none', height: "46px" }}
            >Complete</Button>
            <Button
                variant="contained"
                color="error"
                style={{ textTransform: 'none', height: "46px" }}
            >Delete</Button>
        </div>
    )
}
export default TodoItem; 