import * as types from "./actionTypes";

const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_COUNTRIES_REQUEST: {
      return {
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_COUNTRIES_SUCCESS: {
      return {
        countries: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_COUNTRIES_FAILURE: {
      return {
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
