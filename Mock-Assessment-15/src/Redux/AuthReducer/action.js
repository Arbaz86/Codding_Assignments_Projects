import axios from "axios";
import * as types from "./actionTypes";

export const loginUser = (payload) => (dispatch) => {
  axios.post("https://reqres.in/api/login", payload).then(({ data }) => {
    dispatch({ type: types.LOGIN_USER, payload: data.token });
  });
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_USER });
};
