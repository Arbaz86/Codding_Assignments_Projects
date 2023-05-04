import axios from "axios";
import * as types from "./actionTypes";

export const addJobData = (payload) => (dispatch) => {
  return axios
    .post("https://rich-jade-mite-garb.cyclic.app/jobs", payload)
    .then(({ data }) => {
      return dispatch({ type: types.ADD_JOB_DATA, payload: data });
    });
};

export const getJobsData = () => (dispatch) => {
  return axios
    .get("https://rich-jade-mite-garb.cyclic.app/jobs")
    .then(({ data }) => {
      return dispatch({ type: types.GET_JOBS_DATA, payload: data });
    });
};
