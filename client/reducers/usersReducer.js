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
      fetch('/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(response => 
        response.json()
      ).then(response => {
        console.log('log in successful');
        console.log(response);
        
      })
      
      //set user to logged in
      //set access to access
    case types.CREATE_USER:
      console.log('running create user in reducers');
      //store payload: data
      data = action.payload;
      //add user to db with fetch put request to server
      fetch('/login', {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(response => 
        response.json()
      ).then(response => {
        console.log('create user successful');
        console.log(response);
      })
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
