import getSpoiler from './client';
import {RECEIVE_SPOILER} from 'shared/actionTypes';

function receiveSpoiler (spoiler, tab) {
  return {
    type: RECEIVE_SPOILER,
    foreground: true,
    tab,
    spoiler
  };
}

export function fetchSpoiler({name, tab}) {
  return (dispatch, getState) => {
    return getSpoiler(name)
      .then(data => dispatch(receiveSpoiler(data[0], tab)));
  };
}
