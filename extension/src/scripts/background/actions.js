import getSpoiler from './client';

export function fetchSpoiler({name}) {
  return (dispatch, getState) => {
    return getSpoiler(name)
      .then(data => console.log('Received:', data));
  };
}
