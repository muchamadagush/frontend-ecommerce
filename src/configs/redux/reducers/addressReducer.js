import { actionTypes } from "../contants/actionTypes";

const initialState = {
  modal: false,
  address: {},
  allAddress: [],
  addressById: {}
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
    case actionTypes.GET_ADDRESS:
      return {
        ...state,
        allAddress: action.payload,
      };
    case actionTypes.GET_ADDRESS_BY_ID:
      return {
        ...state,
        addressById: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;
