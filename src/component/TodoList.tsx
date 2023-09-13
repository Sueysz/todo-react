import { H1, InputContainer, TaskList } from "../styles/TodoStyle.ts";
import { Btn } from "../styles/Buttons.ts";


interface TodoProps {
    todo: string;
    todoTask: string[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddTask: () => void;
}

export const TodoList = (props: TodoProps) => {

    const { todo, todoTask, handleChange, handleAddTask } = props;

    return (
        <>
            <H1>Todo list</H1>
            <InputContainer>
                <input type="text" placeholder="Ajouter une tâche..." onChange={handleChange} value={todo} />
                <Btn onClick={handleAddTask}>+</Btn>
            </InputContainer>
            <ul>
                {todoTask.map((task, index) => (
                    <TaskList key={index}>
                        <li>{task}</li>
                        <Btn>x</Btn>
                    </TaskList>
                ))}
            </ul>

        </>
    )
}
