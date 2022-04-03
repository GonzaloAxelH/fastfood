export const ACTION_CART = {
  LOAD_CART: "LOAD_CART",
  SET_PRODUCT_CART: "SET_PRODUCT_CART",
  ADD_ORDER_CART: "ADD_ORDER_CART",
  SAVE_CART: "SAVE_CART",
  DELETE_ORDER_CART: "DELETE_ORDER_CART",
  UPDATE_ORDER_CART: "UPDATE_ORDER_CART",
};

export const actionUpdateOrderCart = (newOrderCart) => {
  return {
    type: ACTION_CART.UPDATE_ORDER_CART,
    payload: newOrderCart,
  };
};

export const actionDeleteOrderCart = (orderCart) => {
  return {
    type: ACTION_CART.DELETE_ORDER_CART,
    payload: orderCart,
  };
};

export const actionLoadCart = () => {
  return {
    type: ACTION_CART.LOAD_CART,
  };
};

export const actionSetProductCart = (productCart) => {
  return {
    type: ACTION_CART.SET_PRODUCT_CART,
    payload: productCart,
  };
};

export const actionAddOrderCart = (orderCart) => {
  return {
    type: ACTION_CART.ADD_ORDER_CART,
    payload: orderCart,
  };
};

export const actionSaveCart = () => {
  return {
    type: ACTION_CART.SAVE_CART,
  };
};
