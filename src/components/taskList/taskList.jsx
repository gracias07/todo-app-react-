// le composant sera utilisé pour afficher la liste des tâches.
import { TaskItem } from '../taskItem/taskitem';
import styles from './taskList.module.css';
export const TaskList = () => {
    return (
        <div className='box'>
            <h2 className={styles.title}>
            🧾 Il te reste encore x tâches à accomplir
                </h2>
                <ul className={styles.container}>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </ul>
        </div>
    )
}