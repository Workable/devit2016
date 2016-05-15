import getSpoiler from './client';
import {RECEIVE_SPOILER} from 'shared/actionTypes';

function receiveSpoiler (spoiler) {
  return {
    type: RECEIVE_SPOILER,
    spoiler
  };
}

export function fetchSpoiler({name}) {
  return (dispatch, getState) => {
    return getSpoiler(name)
      .then(data => dispatch(receiveSpoiler(data[0])));
  };
}
