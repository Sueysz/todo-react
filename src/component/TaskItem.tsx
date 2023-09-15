import { Btn } from "../styles/Buttons"
import { TaskList } from "../styles/TodoStyle"

interface TaskItemProps {
    handleDelete: (index:number) => void;
    todoTask: string[];
}

export const TaskItem : React.FC<TaskItemProps>= ({ handleDelete, todoTask }) => {
    return (
        <>
            <TaskList>
                {todoTask.map((task, index) => (
                    <li key={index}>
                        {task}
                        <Btn onClick={() => handleDelete(index)}>x</Btn>
                    </li>
                ))}
            </TaskList>

        </>
    )
}
