import { useState, ChangeEvent } from "react";
import { TodoList } from "./component/TodoList.tsx"

function App() {
  const [todo, setTodo] = useState('');
  const [todoTask, setTodoTask] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAddTask = () => {
    if (todo !== "") {
      setTodoTask([...todoTask, todo]);
      setTodo("");
    }
  }
  return (
    <>
      <TodoList 
        todo={todo}
        todoTask={todoTask}
        handleChange={handleChange}
        handleAddTask={handleAddTask}
      />
    </>
  )
}

export default App
