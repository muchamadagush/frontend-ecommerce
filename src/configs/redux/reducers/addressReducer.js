import { actionTypes } from "../contants/actionTypes";

const initialState = {
  modal: false,
  address: {},
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MODALS:
      return {
        ...state,
        modal: action.payload,
      };
    case actionTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;
