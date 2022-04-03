import { tempBurgers2 } from "./tempData";

export const initialState = {
  products: {
    allProducts: tempBurgers2,
    product: false,
  },
  productsCart: {
    allProductsCart: [],
    productCart: {},
  },
};
