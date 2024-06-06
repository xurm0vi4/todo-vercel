import { createSlice } from '@reduxjs/toolkit';

const getTasksFromStorage = () => {
  const data = localStorage.getItem('tasks');
  const tasks = data && JSON.parse(data).tasks;
  const doneTasks = data && JSON.parse(data).doneTasks;
  return { tasks, doneTasks };
};

const initialState = {
  tasks: getTasksFromStorage().tasks || [],
  doneTasks: getTasksFromStorage().doneTasks || [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    completeTask(state, action) {
      state.doneTasks.push(action.payload.task);
      state.tasks.splice(action.payload.id, 1);
    },
    deleteTask(state, action) {
      state.tasks.splice(action.payload, 1);
    },
    deleteDoneTask(state, action) {
      state.doneTasks.splice(action.payload, 1);
    },
  },
});

export const { addTask, completeTask, deleteTask, deleteDoneTask } = taskSlice.actions;

export default taskSlice.reducer;
