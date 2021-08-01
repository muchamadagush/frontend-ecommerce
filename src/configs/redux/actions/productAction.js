import blanjaApi from "../../api/blanjaApi";
import { actionTypes } from "../contants/actionTypes"

export const fetchProducts = () => async (dispatch) => {
  const response = await blanjaApi.get("v1/products")
  dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data.data })
}