import { combineReducers, createStore ,applyMiddleware} from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { asyncActions } from "./AsyncMiddleware";


export const SportStoreData = createStore(combineReducers({ShopReducer, CartReducer}),applyMiddleware(asyncActions));