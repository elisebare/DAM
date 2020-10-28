import * as types from '../constants/actionTypes.js'

//add actions here

export const logIn = (data) => ({
  type: types.LOG_IN,
  payload: data,
});

export const changeTask = (task) => ({
  type: types.CHANGE_TASK,
  payload: task,
});

export const createUser = (data) => ({
  type: types.CREATE_USER,
  payload: data,
});

export const fetchSignup = (data) => dispatch => {
  fetch('/login/new', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => {
    response.json();
  }).then(()=> {
    console.log('sign up successful');
    console.log(response);
    /**data should be a JWT
     * {
     *    user: {},
     *    token: 'aaaa.bbbb.bbbb'
     * }
     * store it in locals
    */
    // localStorage.setItem("token", data.token);
    // dispatch(logIn(data.user));
    dispatch(logIn({"fake": "data"}))
  })
}

export const fetchLogin = (data) => dispatch => {
  console.log('running fetchLogin')
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
    /**data should be a JWT
     * {
     *    user: {},
     *    token: 'aaaa.bbbb.bbbb'
     * }
     * store it in locals
    */
    // localStorage.setItem("token", data.token);
    // dispatch(logIn(data.user));
    dispatch(logIn({"fake": "data"}))
  })
}