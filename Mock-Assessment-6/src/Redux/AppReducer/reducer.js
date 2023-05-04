import * as types from "./actionTypes";

const initialState = {
  cart: [],
  products: [],
  placeOrder: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_PRODUCTS_SUCCESS: {
      console.log(payload);
      return {
        ...state,
        products: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // Add to cart
    case types.ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, payload],
        isLoading: false,
        isError: false,
      };
    }

    default:
      return state;
  }
};
