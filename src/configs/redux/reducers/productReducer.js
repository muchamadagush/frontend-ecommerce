import { actionTypes } from "../contants/actionTypes";

const initialState = {
  products: [],
  product: [],
  productByCategory: []
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
      }
    case actionTypes.FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    case actionTypes.FETCH_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        productByCategory: action.payload
      }
    case actionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    default:
      return state
  }
}

export default productReducer