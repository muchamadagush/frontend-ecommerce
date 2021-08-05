import { actionTypes } from "../contants/actionTypes";

const initialState = {
  colors: []
}

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COLORS:
      return {
        ...state,
        colors: action.payload
      }
    default:
      return state
  }
}

export default colorReducer