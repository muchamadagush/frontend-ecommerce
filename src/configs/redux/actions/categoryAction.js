import blanjaApi from "../../api/blanjaApi";
import { actionTypes } from "../contants/actionTypes"

export const fetchCategory = (id) => async (dispatch) => {
  const response = await blanjaApi.get(`v1/category/${id}`)
  console.log(response.data)
  dispatch({ type: actionTypes.FETCH_CATEGORY, payload: response.data })
}