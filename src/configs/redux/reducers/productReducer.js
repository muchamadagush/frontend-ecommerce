import { actionTypes } from "../contants/actionTypes";

const initialState = {
  products: [],
  product: []
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
    default:
      return state
  }
}

export default productReducer