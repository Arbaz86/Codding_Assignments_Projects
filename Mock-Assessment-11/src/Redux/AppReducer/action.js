import axios from "axios";
import * as types from "./actionTypes";

export const getUsersData = () => (dispatch) => {
  dispatch({ type: types.GET_USERS_REQUEST });

  return axios
    .get("https://rich-jade-mite-garb.cyclic.app/users")
    .then(({ data }) => {
      console.log(data);
      return dispatch({ type: types.GET_USERS_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USERS_FAILURE });
    });
};

export const addUserData = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_USER_REQUEST });

  axios
    .post("https://rich-jade-mite-garb.cyclic.app/users", payload)
    .then(({ data }) => {
      console.log(data);
      dispatch({ type: types.ADD_USER_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: types.ADD_USER_FAILURE });
    });
};
