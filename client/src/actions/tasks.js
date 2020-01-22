import {
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  CHECK_TASK,
  FETCHING_TASK,
  FETCHING_TASK_SUCCESS,
  FETCHING_TASK_FAILURE,
} from '../actionsTypes';

import { fetchTaskService, addTask } from '../services/ToDoServices';

export const createTask = (taskName, done = false) => async dispatch => {
  try {
    dispatch({ type: CREATE_TASK });
    const taskID = Math.random()
      .toString(36)
      .substr(2, 9);

    const task = await addTask(taskName, done, taskID);

    dispatch({
      type: CREATE_TASK_SUCCESS,
      payload: task,
    });
  } catch (e) {
    dispatch({
      type: CREATE_TASK_FAILURE,
      payload: e,
    });
  }
};

export const checkTask = index => {
  return {
    type: CHECK_TASK,
    payload: index,
  };
};

export const fetchTask = () => async dispatch => {
  try {
    dispatch({ type: FETCHING_TASK });
    const tasks = await fetchTaskService();
    console.log(tasks);
    dispatch({
      type: FETCHING_TASK_SUCCESS,
      payload: tasks,
    });
  } catch (e) {
    dispatch({
      type: FETCHING_TASK_FAILURE,
      payload: e,
    });
  }
};
