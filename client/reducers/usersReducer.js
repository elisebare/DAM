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
  verified: false,
  level: null,
};

const usersReducer = (state = initialState, action) => {
  let data;

  switch (action.type) {
    case types.LOG_IN:
      console.log('running log in reducer')
      //store data username and pw
      data = action.payload;
      console.log(data);
      
      //set user to logged in
      //set access to access
      //set username
      //set task to logout so logout component will render
      return {
        ...state,
        verified: true,
        username: data.username,
        level: data.level,
        task: 'logout'
      }
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
    case types.LOG_OUT:
    console.log('logging out')
    //payload is new task
    return {
      ...initialState,
    }
    default:
      return state;
  }
  
};

export default usersReducer;
