import {REQUEST_SPOILER} from 'shared/actionTypes';

export function requestSpoiler(name) {
  return {
    type: REQUEST_SPOILER,
    background: true,
    name
  };
}
