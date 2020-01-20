import { createStore } from 'redux';
import appReducer from '../reducers';
import { createTask } from '../actions';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(createTask('manger'));
store.dispatch(createTask('boire', true));

console.log('initial state', store.getState());
export default store;
