import {SELECT_NAME} from 'shared/actionTypes';

export function select(name) {
  return {
    type: SELECT_NAME,
    background: true,
    name
  };
}
