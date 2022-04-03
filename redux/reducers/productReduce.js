import { initialState } from "../states/globalState";
import { ACTION_PRODUCTS } from "../actioncreators/actionsProducts";
import { nameFormat } from "../../helpers/cartHelpers";
import { tempBurgers2 } from "../states/tempData";
const setProduct = (state, payload) => {
  return {
    ...state,
    product: payload,
  };
};

const loadProducts = (state) => {
  return {
    ...state,
    allProducts: tempBurgers2,
  };
};

export const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case ACTION_PRODUCTS.LOAD_PRODUCTS:
      return loadProducts(state);
    case ACTION_PRODUCTS.SET_PRODUCT:
      return setProduct(state, action.payload);
    default:
      return state;
  }
};
