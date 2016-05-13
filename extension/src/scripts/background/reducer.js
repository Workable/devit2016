import {SELECT_NAME, RECEIVE_SPOILER} from 'shared/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_NAME:
      return Object.assign(state, { name: action.name });
    case RECEIVE_SPOILER:
      return Object.assign(state, { spoiler: action.spoiler });
    default:
      return state;
  };
};
