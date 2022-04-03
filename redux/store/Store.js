import { combineReducers, createStore } from "redux";
import { productsCartReducer } from "../reducers/cartReducer";
import { productsReducer } from "../reducers/productReduce";
export default createStore(
  combineReducers({
    products: productsReducer,
    productsCart: productsCartReducer,
  })
);
