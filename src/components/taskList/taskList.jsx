// le composant sera utilisé pour afficher la liste des tâches.
import { TaskItem } from '../taskItem/taskitem';
import styles from './taskList.module.css';
export const TaskList = (
    
     {tasksList,
      editTask, 
      deleteTask,
      incompletedTasks}

) => {
    const taskList = tasksList.map((task) => (
        <TaskItem key={task.id} 
        task={task} 
        editTask={editTask} 
        deleteTask={deleteTask}/>
    ))
    
    return (
        <div className='box'>
            <h2 className={styles.title}>
            🧾 Il te reste encore {incompletedTasks} tâches à accomplir
                </h2>
                {tasksList && tasksList.length > 0 && (
                    <ul className={styles.container}>
                        {taskList}
                        
                        
                    </ul>
                )}
                
        </div>
    )
}