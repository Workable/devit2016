import {PUSH_STATE} from 'shared/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case PUSH_STATE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
