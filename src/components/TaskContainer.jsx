import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"
import { TaskList } from "./taskList/taskList"

export const TaskContainer = () => {
    return (
        <main>
        <Header/>
        <TaskInput/>
        <TaskList/>
        </main>
    )
}