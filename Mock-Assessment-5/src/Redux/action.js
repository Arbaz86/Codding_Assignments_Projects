import * as types from "./actionTypes";
import axios from "axios";

export const getCountriesData = () => (dispatch) => {
  dispatch({ type: types.GET_COUNTRIES_REQUEST });

  return axios
    .get("https://restcountries.com/v3.1/all")
    .then(({ data }) => {
      dispatch({ type: types.GET_COUNTRIES_SUCCESS, payload: data });
      return data;
    })
    .catch((err) => {
      dispatch({ type: types.GET_COUNTRIES_FAILURE });
    });
};
