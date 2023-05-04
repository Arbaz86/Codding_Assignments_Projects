import * as types from "./actionTypes";
import axios from "axios";

export const getProductsData = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });

  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=12`
    )
    .then(({ data }) => {
      console.log(data.data);
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: data.data });
      return data.data;
    })
    .catch((err) => {
      return dispatch({ type: types.GET_PRODUCTS_FAILURE });
    });
};

export const addToCartData = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TO_CART, payload });
};
