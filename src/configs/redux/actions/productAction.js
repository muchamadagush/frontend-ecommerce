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
  const data = response.data.data[0]
  return data
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

export const updateProduct = (id, data, history) => async (dispacth) => {
  try {
    const response = await blanjaApi.put(`v1/products/${id}`, data)
    dispacth({ type: actionTypes.UPDATE_PRODUCT, payload: response.data.data })
    history.push('/seller/products')
    return 'Successfully update item!'
  } catch (error) {
    return error.response.data
  }
}