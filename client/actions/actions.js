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