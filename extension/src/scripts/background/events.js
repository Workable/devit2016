import {fetchSpoiler} from './actions';
import {REQUEST_SPOILER} from 'shared/actionTypes';

export default [
  {
    catch: [REQUEST_SPOILER],
    dispatch: fetchSpoiler
  }
];
