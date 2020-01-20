import { CREATE_TODO } from '../actionsTypes';

export const createToDO = tasks => {
  return {
    type: CREATE_TODO,
    payload: {
      tasks,
    },
  };
};
