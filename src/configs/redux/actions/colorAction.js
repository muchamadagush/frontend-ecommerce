import blanjaApi from "../../api/blanjaApi";
import { actionTypes } from "../contants/actionTypes"

export const fetchColors = () => async (dispatch) => {
  const response = await blanjaApi.get(`v1/colors`)
  dispatch({ type: actionTypes.FETCH_COLORS, payload: response.data.data })
}