import { combineReducers } from "redux";
import userReducer from './userReducer'
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
import colorReducer from "./colorReducer";
import addressReducer from "./addressReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  orders: orderReducer,
  colors: colorReducer,
  address: addressReducer
})

export default rootReducer