/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
//we are adding thunk and applyMiddleware for async functions 
//see fetch ( actions.js and login/create account components for uses)
const store = createStore(
  reducers,
  applyMiddleware(thunk)
  // composeWithDevTools()
);

export default store;