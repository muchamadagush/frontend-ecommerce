import { combineReducers } from "redux";
import userReducer from './userReducer'
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  orders: orderReducer
})

export default rootReducer