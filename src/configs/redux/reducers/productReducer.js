import { actionTypes } from "../contants/actionTypes";

const initialState = {
  products: []
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


    default:
      return state
  }
}

export default productReducer