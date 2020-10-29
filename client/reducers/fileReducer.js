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
  file: null,
};

const fileReducer = (state = initialState, action) => {
  let data;

  switch (action.type) {
    case types.FILE_UPLOADED:
      const fileFromUser = action.payload;
      return {
        ...state,
        file: fileFromUser,
      }
   
    default:
      return state;
  }
  
};

export default fileReducer;
