import { TOGGLE_FILTER } from '../actionsTypes';

function filtersReducer(
  state = { done: false, startsWith: '' },
  { type, payload }
) {
  switch (type) {
    case TOGGLE_FILTER:
      return { ...state, done: !state.done };
    default:
      return state;
  }
}

export default filtersReducer;
