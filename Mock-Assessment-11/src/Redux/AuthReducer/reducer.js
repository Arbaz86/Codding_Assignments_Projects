import * as types from "./actionTypes";

const initState = {
  isAuth: false,
  token: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.ADMIN_LOGIN:
      return {
        isAuth: true,
        token: payload,
      };

    default:
      return state;
  }
};
