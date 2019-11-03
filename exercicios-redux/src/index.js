import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './App';

import fieldReducer from './fieldReducer';

const reducers = combineReducers({
  field: fieldReducer,
});

ReactDOM.render(
  <Provider store={createStore(reducers)} >
    <App />
  </Provider>

, document.getElementById('root'));
