import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import AddTask from './components/AddTask/AddTask';
import DoneTasks from './components/DoneTasks/DoneTasks';
import Tasks from './components/Tasks/Tasks';

import './App.scss';

function App() {
  const { tasks, doneTasks } = useSelector((state) => state.task);
  const allTasks = { tasks, doneTasks };
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(allTasks);
      localStorage.setItem('tasks', json);
    }
    isMounted.current = true;
  }, [allTasks]);
  return (
    <div className="wrapper">
      <AddTask />
      <Tasks />
      <DoneTasks />
    </div>
  );
}

export default App;
