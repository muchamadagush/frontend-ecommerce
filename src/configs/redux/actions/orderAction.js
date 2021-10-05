import blanjaApi from "../../api/blanjaApi";
import { actionTypes } from "../contants/actionTypes";
import { toast } from 'react-toastify'

export const createOrder = (data) => async (dispatch) => {
  try {
    await blanjaApi.post(`v1/orders`, data)
    let status = true
    dispatch({ type: actionTypes.SET_ORDER, payload: status })
    toast.success('Successfully create order!', { position: toast.POSITION.TOP_CENTER })
    return "Successfully create product"
  } catch (error) {
    toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER })
    return error
  }
}

export const fetchOrders = (userId) => async (dispatch) => {
  try {
    const response = await blanjaApi.get(`v1/orders/cart/${userId}`)
    let status = true
    dispatch({ type: actionTypes.FETCH_ORDERS, payload: response.data.data.products, status: status, orders: response.data.data.data })
    return "Successfully get data orders"

  } catch (error) {
    const data = []
    let status = false
    dispatch({ type: actionTypes.FETCH_ORDERS, payload: data.products, status: status, orders: data })
    return error.response
  }
}

export const updateQtyOrder = (id, data) => async (dispatch) => {
  try {
    await blanjaApi.patch(`v1/orders/update/${id}`, data)
    dispatch({ type: actionTypes.UPDATE_QTY })
    return "Successfully update qty order"
  } catch (error) {
    return error.response
  }
}

export const updateStatusOrder = (id, data, history) => async (dispatch) => {
  try {
    await blanjaApi.patch(`v1/orders/${id}`, data)
    history.push('/')
    return "Successfully update status order"
  } catch (error) {
    return error.response
  }
}

export const checkotOrder = (data, history) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await blanjaApi.patch(`v1/orders`, data, config)
    toast.success('Successfully checkout order!', { position: toast.POSITION.TOP_CENTER })
    setTimeout(() => {
      const status = false
      dispatch({ type: actionTypes.UPDATE_STATUS, payload: status })
      history.push('/')
    }, 2500);
    return "Successfully checkout order"
  } catch (error) {
    return error.response
  }
}

export const fetchAllOrders = (userId) => async (dispatch) => {
  try {
    const response = await blanjaApi.get(`v1/orders/all/${userId}`)
    dispatch({ type: actionTypes.FETCH_ORDERS_WHERE_USERID, payload: response.data.data})
  } catch (error) {
    return error.response
  }
}

export const fetchOrderBySeller = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await blanjaApi.get('v1/orders/seller', config)
    dispatch({ type: actionTypes.FETCH_ORDERS_SELLER, payload: response.data.data})

  } catch (error) {
    return error.response
  }
}

export const deleteOrderDetails = (selected) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await blanjaApi.delete(`v1/orders/${selected}`, config)

    toast.success('Successfully delete order!', { position: toast.POSITION.TOP_CENTER })
  } catch (error) {
    console.log(error.response.data.message)
    return error.response
  }
}

export const getOrderById = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await blanjaApi.get(`v1/orders/order/${id}`, config)

    dispatch({ type: actionTypes.FETCH_ORDERS_BY_ID, payload: response.data.data})
  } catch (error) {
    console.log(error.response.data.message)
    return error.response
  }
}

export const paymentConfirm = (id, data, history) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await blanjaApi.post(`v1/orders/payment/${id}`, data, config)

    toast.success('Payment in progress!', { position: toast.POSITION.TOP_CENTER })

    setTimeout(() => {
      history.push('/user/orders')
    }, 2500);
  } catch (error) {
    toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER })
    return error.response
  }
}