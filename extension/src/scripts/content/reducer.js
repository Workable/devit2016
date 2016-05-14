import {PUSH_STATE, REQUEST_SPOILER, RECEIVE_SPOILER} from 'shared/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case PUSH_STATE:
      return Object.assign({}, state, action.payload);
    case REQUEST_SPOILER:
      return Object.assign({}, state, { name: action.name, spoiler: null });
    case RECEIVE_SPOILER:
      return Object.assign({}, state, { spoiler: action.spoiler });
    default:
      return state;
  }
};
