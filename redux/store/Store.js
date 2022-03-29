import { combineReducers, createStore } from "redux";
import { initialState } from "../states/globalState";

export const ACTION = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCT: "GET_PRODUCT",
};

const getProduct = (state, payload) => {
  const convertNameURL = (name) => {
    return name
      .split(" ")
      .map((el) => el.toLowerCase())
      .join("-");
  };
  const nameProduct = payload.nameProduct;

  const product = state.allProducts.find(
    (el) => convertNameURL(el.name) == nameProduct
  );
  return {
    ...state,
    product: product,
  };
};

const getAllProducts = (state, payload) => {
  return state;
};

const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case ACTION.GET_PRODUCTS:
      return getAllProducts(state, action.payload);
    case ACTION.GET_PRODUCT:
      return getProduct(state, action.payload);
    default:
      return state;
  }
};

export default createStore(combineReducers({ products: productsReducer }));
