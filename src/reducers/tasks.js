import { CREATE_TASK, CHECK_TASK } from '../actionsTypes';

function checkTask(tasks, index) {
  const task = tasks[index];
  return [
    ...tasks.slice(0, index),
    { ...task, done: !task.done },
    ...tasks.slice(index + 1),
  ];
}

const tasksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_TASK:
      return [...state, payload];
    case CHECK_TASK:
      return checkTask(state, payload);
    default:
      return state;
  }
};

export default tasksReducer;
