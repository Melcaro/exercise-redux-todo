import { CREATE_TASK, CHECK_TASK } from '../actionsTypes';

export const createTask = (taskName, done = false) => {
  return {
    type: CREATE_TASK,
    payload: {
      taskName,
      done,
    },
  };
};

export const checkTask = index => {
  return {
    type: CHECK_TASK,
    payload: index,
  };
};
