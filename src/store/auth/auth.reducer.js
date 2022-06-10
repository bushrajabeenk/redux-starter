// import {
//   LOGIN_LOADING,
//   LOGIN_ERROR,
//   LOGIN_SUCCESS,
//   LOGOUT,
// } from "./auth.types";

const initState = {
  loading: false,
  error: false,
  isAuth: false,
  token: "",
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    // case LOGIN_LOADING: {
    //   return { ...state };
    // }
    // case LOGIN_ERROR: {
    //   return { ...state };
    // }
    // case LOGIN_SUCCESS: {
    //   return { ...state };
    // }
    // case LOGOUT: {
    //   return { ...state };
    // }
    default: {
      return state;
    }
  }
};
