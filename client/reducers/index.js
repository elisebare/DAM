/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import fileReducer from './fileReducer';

// import all reducers here
import usersReducer from './usersReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  users: usersReducer,
  files: fileReducer,
});

// make the combined reducers available for import
export default reducers;

