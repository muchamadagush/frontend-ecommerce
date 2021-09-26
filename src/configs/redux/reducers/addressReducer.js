import { actionTypes } from "../contants/actionTypes";

const initialState = {
  modal: false,
}

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MODALS:
      return {
        ...state,
        modal: action.payload
      }
    default:
      return state
  }
}

export default addressReducer