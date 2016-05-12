import 'babel-polyfill';

import configureStore from 'shared/configureStore';
import reducer from './reducer';
import initialState from './initialState';
import api from './api';
import events from './events';
import {default as chromeEnhancer} from './storeEnhancer';

console.log('Welcome from background script!');

global.store = configureStore({ reducer, initialState, api, events, chromeEnhancer });
