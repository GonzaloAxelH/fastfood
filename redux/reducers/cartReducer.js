import { initialState } from "../states/globalState";
import { ACTION_CART } from "../actioncreators/actonsCart";
import {
  getCartProductsLocal,
  saveCartLocal,
  verifyLocalStorage,
} from "../../Services/LocalStorage";

const addOrderCart = (state, payload) => {
  return {
    ...state,
    allProductsCart: [...state.allProductsCart, payload],
  };
};

const setProductCart = (state, payload) => {
  return {
    ...state,
    productCart: payload,
  };
};

const loadCart = (state) => {
  if (verifyLocalStorage()) {
    return getCartProductsLocal();
  } else {
    saveCartLocal({
      ...state,
      allProductsCart: [],
    });
    return {
      ...state,
      allProductsCart: [],
    };
  }
};

const saveCart = (state) => {
  saveCartLocal(state);
  return state;
};

const deleteOrderCart = (state, payload) => {
  const updateProductCart = state.allProductsCart.filter(
    (el) => el.idProduct !== payload.idProduct
  );
  return {
    ...state,
    allProductsCart: updateProductCart,
  };
};

const updateOrderCart = (state, payload) => {
  const updateProductCart = state.allProductsCart.filter(
    (el) => el.idProduct !== payload.idProduct
  );

  return {
    ...state,
    allProductsCart: [...updateProductCart, payload],
  };
};

export const productsCartReducer = (
  state = initialState.productsCart,
  action
) => {
  switch (action.type) {
    case ACTION_CART.LOAD_CART:
      return loadCart(state);
    case ACTION_CART.SET_PRODUCT_CART:
      return setProductCart(state, action.payload);
    case ACTION_CART.ADD_ORDER_CART:
      return addOrderCart(state, action.payload);
    case ACTION_CART.SAVE_CART:
      return saveCart(state);
    case ACTION_CART.DELETE_ORDER_CART:
      return deleteOrderCart(state, action.payload);
    case ACTION_CART.UPDATE_ORDER_CART:
      return updateOrderCart(state, action.payload);
    default:
      return state;
  }
};
