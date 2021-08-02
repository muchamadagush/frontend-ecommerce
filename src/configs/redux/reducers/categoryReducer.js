import { actionTypes } from "../contants/actionTypes";

const initialState = {
  category: [],
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    default:
      return state
  }
}

export default categoryReducer