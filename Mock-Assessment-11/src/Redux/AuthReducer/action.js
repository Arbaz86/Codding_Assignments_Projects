import axios from "axios";
import * as types from "./actionTypes";

export const adminLogin = (payload) => (dispatch) => {
  return axios.post("https://reqres.in/api/login", payload).then(({ data }) => {
    return dispatch({ type: types.ADMIN_LOGIN, payload: data.token });
  });
};
