// Імпортуємо хук
import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';
import { selectVisibleTasks } from "redux/selectors";


export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(selectVisibleTasks );
  

  return (
    <ul className={css.listItem}>
      {tasks.map(task => (
        <li key={task.id} className={css.list}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
