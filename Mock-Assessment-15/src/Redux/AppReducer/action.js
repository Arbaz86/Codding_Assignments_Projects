import axios from "axios";
import * as types from "./actionTypes";

export const getProducts =
  (skip = 0) =>
  (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });

    axios
      .get(`https://dummyjson.com/products?limit=12&skip=${skip * 12}`)
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: data.products });
      })
      .catch((err) => {
        dispatch({ type: types.GET_PRODUCTS_FAILURE });
      });
  };
