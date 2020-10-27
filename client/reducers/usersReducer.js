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
  username: '',
  password: '',
  verified: false,
  access: null,
};

const usersReducer = (state = initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.LOG_IN:
      //store data username and pw
      const data = action.payload;
      //invoke fetch ??
      fetch('/login', {
        method: 'post',
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      }).then(data => {
        console.log('log in successful');
        console.log(data);
        
      })
      
      //set user to logged in
      //set access to access
    case types.SET_USER:
      //store payload: username
      //add username to state
    case types.SET_PASSWORD:
      //store payload: password
      //add password to state
    default:
      return state;
  }
  
};

export default usersReducer;
