import { useDispatch } from "react-redux";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { addTodo, deleteTodo, completeTodo } from "../../redux/slices/todoSlice";

function TodoForm() {

    const dispatch = useDispatch();
    

    const [todo, setTodo] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        dispatch.addTodo({
            id: Math.random(),
            todo,
        });
        setTodo("");
    }
    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: 15, padding: 15}}>
            <TextField
                id="outlined-controlled"
                label="Enter new todo"
                fullWidth
                value={todo}
                onChange={(event) => {
                    setTodo(event.target.value);
                }}
                style={{
                    height: "46px"
                }}
            />
            <Button
                type="submit"
                variant="contained" fullWidth
                color="success"
                style={{textTransform: 'none', height: "46px"}}
            >Add Todo</Button>

        </form>
    )
}
export default TodoForm; 