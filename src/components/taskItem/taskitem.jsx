//ce composant est un item de la liste des tâches
//il fait partie du composant TaskList
import styles from './taskitem.module.css';

export const TaskItem = ({ task, editTask, deleteTask }) => {
   // console.log(task);
    return (
        <li className={`${styles.container} ${styles.default}`}
        onClick={() => editTask(task.id, !task?.completed ? styles.success : styles.default)}
        >
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>
                    {task.id}
                </div>
                <div className={styles.contentDefault}>
                    {task.title}
                </div>
            </div>
            <button className='button-primary'>x</button>
        </li>
    );
}