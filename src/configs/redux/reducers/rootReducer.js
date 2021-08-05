import { combineReducers } from "redux";
import userReducer from './userReducer'
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
import colorReducer from "./colorReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  orders: orderReducer,
  colors: colorReducer
})

export default rootReducer