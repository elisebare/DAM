import * as types from '../constants/actionTypes.js'

//add actions here

export const logIn = (data) => ({
  type: types.LOG_IN,
  payload: data,
});

export const setPassword = (password) => ({
  type: types.SET_PASSWORD,
  payload: password,
});

export const setUser = (username) => ({
  type: types.SET_USER,
  payload: username,
});