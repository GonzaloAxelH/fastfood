export const ACTION_PRODUCTS = {
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
  SET_PRODUCT: "SET_PRODUCT",
};

export const actionLoadProducts = () => {
  console.log("action load products");
  return {
    type: ACTION_PRODUCTS.LOAD_PRODUCTS,
  };
};

export const actionSetProduct = (product) => {
  return {
    type: ACTION_PRODUCTS.SET_PRODUCT,
    payload: product,
  };
};
