import * as types from "./actionTypes";

const initState = {
  signupUsers: [],
  isAuth: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_SIGNUP_USER:
      return {
        ...state,
        signupUsers: payload,
      };

    case types.ADD_SIGNUP_USER:
      return {
        ...state,
        signupUsers: [...state.signupUsers, payload],
      };

    case types.SINGIN_USER:
      return {
        ...state,
        isAuth: payload,
      };

    default:
      return state;
  }
};
