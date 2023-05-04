import * as types from "./actionTypes";

const initState = {
  isAuth: false,
  token: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_USER:
      return {
        isAuth: true,
        token: payload,
      };
    case types.LOGOUT_USER:
      return {
        isAuth: false,
        token: "",
      };
    default:
      return state;
  }
};
