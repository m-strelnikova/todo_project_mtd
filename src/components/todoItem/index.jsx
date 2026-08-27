import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../redux/slices/todoSlice";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";

function TodoItem({ todo }) {

    const dispatch = useDispatch();

    function handleDelete(id) {
        dispatch(deleteTodo({
            id: id,
        }))
    }

    function handleComplete(id) {
        dispatch(completeTodo({
            id: id,
        }))
        setIsCompleted(prev => !prev)
    }

    const [isCompleted, setIsCompleted] = useState(false)
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                borderBottom: "1px solid darkgrey",
                paddingBottom: "15px",
            }}
        >
            <Typography
                variant="p"
                sx={{
                    fontSize: "1.2rem",
                    padding: 0,
                    margin: 0,
                    fontFamily: "Arial"
                }}
                style={{
                    textDecorationLine: isCompleted ? "line-through" : undefined,
                    color: isCompleted ? "gray" : undefined,
                }}
            >
                {todo.todo}
            </Typography>

            <Box>
                <Button
                    variant="contained"
                    color="info"
                    sx={{ textTransform: "none", height: "46px", mr: 1 }}
                    onClick={() => handleComplete(todo.id)}
                >
                    {
                        isCompleted ? "Undo" : "Complete"
                    }
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    sx={{ textTransform: "none", height: "46px" }}
                    onClick={() => handleDelete(todo.id)}
                >
                    Delete
                </Button>
            </Box>
        </Box>
    )
}
export default TodoItem; 