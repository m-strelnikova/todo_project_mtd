import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../todoItem";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function TodoList() {

    const todos = useSelector((state) => state.todo.todos);

    return (
        <div>
            <Typography variant="h1" size="medium">Todo List</Typography>
            <List>
                {todos.map((todo) => (
                    <ListItem key={todo.id}>
                        <TodoItem todo={todo}/>
                    </ListItem>
                ))}
            </List>
        
        </div>
    )
}
export default TodoList; 