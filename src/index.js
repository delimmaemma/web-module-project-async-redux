import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import App from './App';
import './index.css';

import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);