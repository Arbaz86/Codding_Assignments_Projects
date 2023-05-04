import * as types from "./actionTypes";

const initState = {
  users: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    // GET USER DATA
    case types.GET_USERS_REQUEST:
      return {
        isLoading: true,
        isError: false,
      };
    case types.GET_USERS_SUCCESS:
      return {
        users: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_USERS_SUCCESS:
      return {
        isLoading: false,
        isError: true,
      };

    // ADDING USER
    case types.ADD_USER_REQUEST:
      return {
        isLoading: true,
        isError: false,
      };
    case types.ADD_USER_SUCCESS:
      return {
        users: [...state.users, payload],
        isLoading: false,
        isError: false,
      };
    case types.ADD_USER_SUCCESS:
      return {
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
