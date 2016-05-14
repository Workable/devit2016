import {REQUEST_SPOILER, RECEIVE_SPOILER} from 'shared/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_SPOILER:
      return Object.assign({}, state, { name: action.name });
    case RECEIVE_SPOILER:
      return Object.assign({}, state, { spoiler: action.spoiler });
    default:
      return state;
  };
};
