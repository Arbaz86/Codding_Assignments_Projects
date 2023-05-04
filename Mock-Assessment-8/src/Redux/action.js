import axios from "axios";
import * as types from "./actionTypes";

export const getSignupUserData = () => (dispatch) => {
  axios.get("https://rich-jade-mite-garb.cyclic.app/user").then(({ data }) => {
    dispatch({ type: types.GET_SIGNUP_USER, payload: data });
  });
};

export const signupUser = (payload) => (dispatch) => {
  axios
    .post("https://rich-jade-mite-garb.cyclic.app/user", payload)
    .then(({ data }) => {
      alert("Signup successful");
      dispatch({ type: types.ADD_SIGNUP_USER, payload: data });
    });
};

export const signinUser = () => (dispatch) => {
  return dispatch({ type: types.SINGIN_USER, payload: true });
};

export const deleteUserData = (id) => (dispatch) => {
  axios
    .delete(`https://rich-jade-mite-garb.cyclic.app/user/${id}`)
    .then((res) => {
      dispatch(getSignupUserData());
    });
};

export const updateUserData = (payload) => (dispatch) => {
  axios
    .patch(`https://rich-jade-mite-garb.cyclic.app/user/${payload.id}`, payload)
    .then((res) => {
      dispatch(getSignupUserData());
    });
};
