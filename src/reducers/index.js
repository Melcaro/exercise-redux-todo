import { combineReducers } from 'redux';

import toDoReducer from './todo';
import tasksReducer from './tasks';
import filtersReducer from './filters';

export default combineReducers({
  todo: toDoReducer,
  tasks: tasksReducer,
  filters: filtersReducer,
});
