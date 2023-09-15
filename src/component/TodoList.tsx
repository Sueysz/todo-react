import { H1, InputContainer } from "../styles/TodoStyle.ts";
import { Btn } from "../styles/Buttons.ts";
import { TaskItem } from "./TaskItem.tsx";


interface TodoProps {
    todo: string;
    todoTask: string[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddTask: () => void;
    handleDelete: (index: number) => void;
}

export const TodoList = (props: TodoProps) => {

    const { todo, todoTask, handleChange, handleAddTask, handleDelete } = props;

    return (
        <>
            <H1>Todo list</H1>
            <InputContainer>
                <input type="text" placeholder="Ajouter une tâche..." onChange={handleChange} value={todo} />
                <Btn onClick={handleAddTask}>+</Btn>
            </InputContainer>
            <TaskItem
                todoTask={todoTask}
                handleDelete={handleDelete}
            />

        </>
    )
}
