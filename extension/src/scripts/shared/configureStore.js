import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import notify from 'redux-notify';
import chromeGofer from './reduxChromeGofer';

export default function configureStore({
  middleware = [thunk],
  reducer = null,
  initialState = {},
  api = null,
  events = [],
  chromeEnhancer = () => null,
} = {}) {

  if (events.length > 0) {
    middleware.push(notify(events, { noReverse: true   }));
  }

  middleware.push(chromeGofer(api));
  middleware.push(require('redux-logger')({ level: 'info', collapsed: true }));

  const enhancer = compose(chromeEnhancer(api), applyMiddleware(...middleware));

  return createStore(reducer, initialState, enhancer);
}
