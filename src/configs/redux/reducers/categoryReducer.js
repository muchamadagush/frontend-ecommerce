import { actionTypes } from "../contants/actionTypes";

const initialState = {
  category: [],
  categories: []
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state
  }
}

export default categoryReducer