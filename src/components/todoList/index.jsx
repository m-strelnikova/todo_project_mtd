import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../todoItem";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

function TodoList() {

    const todos = useSelector((state) => state.todo.todos);

    return (
        <Box sx={{m: "20px 100px", p: "20px", border: 1, borderColor: "lightgrey", bgcolor: " #e0e0e02e", borderRadius: 4}}>
            <Typography variant="h3" size="medium" align="center" style={{
                 fontFamily: "Times New Roman"
            }}>Todo List</Typography>
            <List>
                {todos.map((todo) => (
                    <ListItem key={todo.id}>
                        <TodoItem todo={todo}/>
                    </ListItem>
                ))}
            </List>
        
        </Box>
    )
}
export default TodoList; 