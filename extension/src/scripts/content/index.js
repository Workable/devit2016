import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from 'shared/configureStore';
import reducer from './reducer';
import api from './api';
import {default as chromeEnhancer} from './storeEnhancer';
import {buildDOMContainer} from './dom';

let store = configureStore({ reducer, api, chromeEnhancer });

render(
  <Provider store={store}>
    <div>
      Content goes here...
    </div>
  </Provider>,
  buildDOMContainer()
);

console.log('Welcome from content script!');
