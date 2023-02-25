import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { useEffect } from 'react';
import { useDispatch, useSelector, 
  // useSelector 
} from 'react-redux';
import { fetchTasks } from 'redux/operations';
import { getError, getIsLoading,
  //  getTasks
   } from 'redux/selectors';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector (getError)
  
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Рендерим розмітку в залежності від значень у стані
  return (
         <Layout>
        <AppBar />
        <TaskForm />
        {isLoading && !error && <b>Please wait request in progress...</b>}
        <TaskList />
      </Layout>
  
  );
};
