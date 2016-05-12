import $ from 'jquery';
import {SELECT_NAME} from 'shared/actionTypes';

export default function select(name) {
  return {
    type: SELECT_NAME,
    background: true,
    name
  };
}
