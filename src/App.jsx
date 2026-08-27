import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

function App() {
  

  return (
    <div style={{
      display: 'flex', flexDirection: "column", margin: "10px 10%"
    }}>
    <TodoForm />
    <TodoList />
    </div>
  )
}

export default App
