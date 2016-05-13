import getSpoiler from './client';
import {REQUEST_SPOILER, RECEIVE_SPOILER} from 'shared/actionTypes';

function requestSpoiler(tab){
  return {
    type: REQUEST_SPOILER,
    foreground: true,
    tab
  };
}

function receiveSpoiler (tab, spoiler) {
  return {
    type: RECEIVE_SPOILER,
    foreground: true,
    tab,
    spoiler
  };
}

export function fetchSpoiler({tab}) {
  return (dispatch, getState) => {
    const {name} = getState();
    dispatch(requestSpoiler(tab));
    return getSpoiler(name)
      .then(data => dispatch(receiveSpoiler(tab, data[0])));
  };
}
