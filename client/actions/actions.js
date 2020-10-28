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
    return response.json();
  }).then((response)=> {
    console.log('sign up successful');
    console.log(response);
    /**data should be a JWT
     * {
     *    username: '',
     *    level: number,
     *    token: 'aaaa.bbbb.bbbb'
     * }
     * store token in locals and username/level in STATE
    */
    localStorage.setItem("token", response.token);
    dispatch(logIn({level: response.level, username: response.username}))
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
  ).then((response)=> {
    console.log('log in successful');
    console.log(response);
    /**data should be a JWT
     * {
     *    username: '',
     *    level: number,
     *    token: 'aaaa.bbbb.bbbb'
     * }
     * store token in locals and username/level in STATE
    */
    localStorage.setItem("token", response.token);
    dispatch(logIn({level: response.level, username: response.username}))
  })
}

export const fetchSignout = () => dispatch => {
  console.log('running fetch Signout')
  localStorage.removeItem("token");
}