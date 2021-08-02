import blanjaApi from "../../api/blanjaApi";
import { actionTypes } from "../contants/actionTypes"

export const fetchCategory = (id) => async (dispatch) => {
  const response = await blanjaApi.get(`v1/category/${id}`)
  dispatch({ type: actionTypes.FETCH_CATEGORY, payload: response.data.data })
  const categoryId = response.data.data[0].id
  return categoryId
}

export const fetchCategories = () => async (dispatch) => {
  const response = await blanjaApi.get(`v1/category`)
  dispatch({ type: actionTypes.FETCH_CATEGORIES, payload: response.data.data })
}