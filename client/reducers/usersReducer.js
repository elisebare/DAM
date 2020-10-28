/**
 * ************************************
 *
 * @module  usersReducer
 * @author
 * @date
 * @description login logout etc
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

const initialState = {
  task: 'login',
  username: '',
  password: '',
  verified: false,
  access: null,
};

const usersReducer = (state = initialState, action) => {
  let data;

  switch (action.type) {
    case types.LOG_IN:
      console.log('running log in reducer')
      //store data username and pw
      data = action.payload;
      console.log(data);
      //invoke fetch ??
      return state;
      //set user to logged in
      //set access to access
    case types.CREATE_USER:
      console.log('running create user in reducers');
      //store payload: data
      data = action.payload;
      console.log(data)
      //add user to db with fetch put request to server
      return state;
    case types.CHANGE_TASK:
      console.log('changing task')
      //payload is new task
      return {
        ...state,
        task: action.payload
      }
    default:
      return state;
  }
  
};

export default usersReducer;
