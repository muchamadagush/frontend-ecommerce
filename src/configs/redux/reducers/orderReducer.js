import { actionTypes } from "../contants/actionTypes";

const initialState = {
  orderdetails: [],
  status: false,
  error: null,
  orders: [],
  allItem: []
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDER:
      return {
        ...state,
        status: action.payload
      }
    case actionTypes.FETCH_ORDERS:
      return {
        ...state,
        orderdetails: action.payload,
        status: action.status,
        orders: action.orders
      }
    case actionTypes.UPDATE_QTY:
      return {
        ...state,
        orders: action.payload
      }
    case actionTypes.UPDATE_STATUS:
      return {
        ...state,
        status: action.payload
      }
    case actionTypes.FETCH_ORDERS_WHERE_USERID:
      return {
        ...state,
        allItem: action.payload
      }
    default:
      return state
  }
}

export default orderReducer