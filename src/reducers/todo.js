import { CREATE_TODO } from '../actionsTypes';

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default toDoReducer;
