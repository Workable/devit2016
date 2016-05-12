import {fetchSpoiler} from './actions';
import {SELECT_NAME} from 'shared/actionTypes';

export default [
  {
    catch: [SELECT_NAME],
    dispatch: fetchSpoiler
  }
];
