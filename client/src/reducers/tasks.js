import {
  CREATE_TASK_SUCCESS,
  CHECK_TASK,
  FETCHING_TASK_SUCCESS,
  FETCHING_TASK,
  FETCHING_TASK_FAILURE,
} from '../actionsTypes';

function checkTask(tasks, index) {
  const task = tasks[index];
  return [
    ...tasks.slice(0, index),
    { ...task, done: !task.done },
    ...tasks.slice(index + 1),
  ];
}
const DEFAULT_STATE = { isLoading: false, tasks: [], error: null };

const tasksReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    // case CREATE_TASK_SUCCESS:
    //   return [...state, payload];
    case FETCHING_TASK:
      return {
        ...DEFAULT_STATE,
        isLoading: true,
      };
    case FETCHING_TASK_SUCCESS:
      return {
        ...DEFAULT_STATE,
        tasks: payload,
      };
    case FETCHING_TASK_FAILURE:
      return {
        ...DEFAULT_STATE,
        error: payload,
      };

    // case CHECK_TASK:
    //   return checkTask(state, payload);
    default:
      return DEFAULT_STATE;
  }
};

export default tasksReducer;
