import axios from "axios";
import {
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

export const login = (data) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post("https://reqres.in/api/login", {
      email: data.email,
      password: data.password,
    })
    .then((r) => {
      dispatch({ type: LOGIN_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const logout = () => ({ type: LOGOUT });
