import { useState, ChangeEvent, useEffect } from "react";
import { TodoList } from "./component/TodoList.tsx"

function App() {
  const [todo, setTodo] = useState('');
  const [todoTask, setTodoTask] = useState<string[]>([]);

  useEffect(()=>{
    const storedTodoTask= localStorage.getItem("todoTask");
    if(storedTodoTask) {
      setTodoTask(JSON.parse(storedTodoTask));
    }
  },[]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAddTask = () => {
    if (todo !== "") {
      const newTodoTask = [...todoTask, todo];
      setTodoTask([...todoTask, todo]);
      setTodo("");
      localStorage.setItem("todoTask", JSON.stringify(newTodoTask));
    }
  }

  const handleDelete = (index:number) => {
    const newTodoTask = [...todoTask];
    newTodoTask.splice(index, 1);
    setTodoTask(newTodoTask)

    localStorage.setItem("todoTask", JSON.stringify(newTodoTask));
  }
  return (
    <>
      <TodoList 
        todo={todo}
        todoTask={todoTask}
        handleChange={handleChange}
        handleAddTask={handleAddTask}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default App
