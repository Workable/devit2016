import 'babel-polyfill';

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from 'shared/configureStore';
import initialState from './initialState';
import reducer from './reducer';
import api from './api';
import {default as chromeEnhancer} from './storeEnhancer';
import {buildShadowDOMContainer} from './dom';
import MainContainer from './main/container';

console.log('Welcome from content script!');

let store = configureStore({ reducer, initialState, api, chromeEnhancer });

render(
  <Provider store={store}>
    <MainContainer/>
  </Provider>,
  buildShadowDOMContainer()
);
