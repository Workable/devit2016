import initialState from './initialState';
import {PUSH_STATE, RECEIVE_SPOILER} from 'shared/actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case PUSH_STATE:
      return Object.assign({}, state, action.payload);
    case RECEIVE_SPOILER:
      return Object.assign({}, state, {spoiler: action.spoiler});
    default:
      return state;
  }
};
