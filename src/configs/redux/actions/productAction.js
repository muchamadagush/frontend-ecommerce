import blanjaApi from "../../api/blanjaApi";
import { actionTypes } from "../contants/actionTypes"

export const fetchProducts = (search, page, perPage, orderBy, sort) => async (dispatch) => {
  try {
    let query = `v1/products?search=${search}`
    if (page) {
      query = query + `&page=${page}`
    }
    if (perPage) {
      query = query + `&perPage=${perPage}`
    }
    if (orderBy) {
      query = query + `&orderBy=${orderBy}`
    }
    if (sort) {
      query = query + `&sortBy=${sort}`
    }
    const response = await blanjaApi.get(query)
    console.log(search, page, perPage, orderBy, sort)
    
    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data })
    return response.data.totalPage

  } catch (error) {
    const data = []
    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data })
  }
}

export const setProducts = (data) => async (dispacth) => {
  try {
    await blanjaApi.post(`v1/products`, data)
    dispacth({ type: actionTypes.SET_PRODUCTS })
    return "Successfully create product"
  } catch (error) {
    return error.response.data.message
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
    console.log(error.response.data)
    return error.response.data
  }
}