import {
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

const initState = {
  loading: false,
  error: false,
  isAuth: false,
  token: "",
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        isAuth: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
