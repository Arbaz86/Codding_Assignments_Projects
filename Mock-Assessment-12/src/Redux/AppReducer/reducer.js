import * as types from "./actionTypes";

const initState = {
  data: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    // getting jobs data
    case types.GET_JOBS_DATA:
      return {
        data: payload,
      };

    // adding job data
    case types.ADD_JOB_DATA:
      return {
        data: [...state.data, payload],
      };

    default:
      return state;
  }
};
