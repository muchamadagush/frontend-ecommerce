import blanjaApi from "../../api/blanjaApi";
import { actionTypes } from "../contants/actionTypes"

export const fetchProducts = () => async (dispatch) => {
  const response = await blanjaApi.get("v1/products")
  dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data })
}

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products
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