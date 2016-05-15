import getSpoiler from './client';
import {RECEIVE_SPOILER} from 'shared/actionTypes';

function receiveSpoiler (tab, spoiler) {
  return {
    type: RECEIVE_SPOILER,
    tab,
    spoiler
  };
}

export function fetchSpoiler({tab, name}) {
  return (dispatch, getState) => {
    return getSpoiler(name)
      .then(data => dispatch(receiveSpoiler(tab, data[0])));
  };
}
