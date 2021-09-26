import blanjaApi from "../../api/blanjaApi";
import { actionTypes } from "../contants/actionTypes";
import { toast } from 'react-toastify';

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

export const setProducts = (data, history) => async (dispacth) => {
  try {
    const token = localStorage.getItem("token")
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    await blanjaApi.post(`v1/products`, data, config)
    toast.success('Successfully create product!', { position: toast.POSITION.TOP_CENTER })
    setTimeout(() => {
      dispacth({ type: actionTypes.SET_PRODUCTS })
      history.push('/seller/products')
    }, 2500);
    return "Successfully create product"
  } catch (error) {
    toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER })
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
    const token = localStorage.getItem("token")
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    await blanjaApi.delete(`v1/products/${id}`, config)
    dispacth({ type: actionTypes.DELETE_PRODUCT })
    return 'Successfully delete item!'
  } catch (error) {
    return error
  }
}

export const updateProduct = (id, data, history) => async (dispacth) => {
  try {
    const token = localStorage.getItem("token")
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const response = await blanjaApi.put(`v1/products/${id}`, data, config)
    dispacth({ type: actionTypes.UPDATE_PRODUCT, payload: response.data.data })
    history.push('/seller/products')
    return 'Successfully update item!'
  } catch (error) {
    console.log(error.response.data)
    return error.response.data
  }
}