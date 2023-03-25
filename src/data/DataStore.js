import { combineReducers, createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";

export const SportStoreData = createStore(combineReducers({ShopReducer, CartReducer}),{});