import blanjaApi from "../../api/blanjaApi";
import { actionTypes } from "../contants/actionTypes"

export const fetchProducts = () => async (dispatch) => {
  const response = await blanjaApi.get("v1/products")
  dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data.data })
}

export const setProducts = (data) => async (dispacth) => {
  try {
    await blanjaApi.post(`v1/products`, data)
    dispacth({ type: actionTypes.SET_PRODUCTS })
    return "Successfully create product"
  } catch (error) {
    return error
  }
}

export const fetchProduct = (id) => async (dispatch) => {
  const response = await blanjaApi.get(`v1/products/${id}`)
  dispatch({ type: actionTypes.FETCH_PRODUCT, payload: response.data.data })
  const categoryId = response.data.data[0].category_id
  return categoryId
}

export const fetchProductByCategory = (categoryId) => async (dispatch) => {
  const response = await blanjaApi.get(`v1/products/category/${categoryId}`)
  dispatch({ type: actionTypes.FETCH_PRODUCT_BY_CATEGORY, payload: response.data.data })
}

export const deleteProduct = (id) => async (dispacth) => {
  try {
    await blanjaApi.delete(`v1/products/${id}`)
    dispacth({ type: actionTypes.DELETE_PRODUCT })
    return 'Successfully delete item!'
  } catch (error) {
    return error
  }
}