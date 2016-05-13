import 'babel-polyfill';

import configureStore from 'shared/configureStore';
import reducer from './reducer';
import api from './api';
import events from './events';
import {default as chromeEnhancer} from './storeEnhancer';

global.store = configureStore({ reducer, api, events, chromeEnhancer });

console.log('Welcome from background script!');
