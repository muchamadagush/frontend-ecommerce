import blanjaApi from "../../api/blanjaApi";
import { toast } from 'react-toastify';
import { actionTypes } from "../contants/actionTypes";

export const addNewAddress = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await blanjaApi.post(`v1/address`, data, config);

    toast.success('Successfully add new address!', { position: toast.POSITION.TOP_CENTER })
  } catch (error) {
    toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER })
    return error;
  }
};

export const updateAddress = (id ,data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await blanjaApi.patch(`v1/address/edit/${id}`, data, config);

    toast.success('Successfully update address!', { position: toast.POSITION.TOP_CENTER })
  } catch (error) {
    toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER })
    return error;
  }
};

export const setModal = (data) => (dispatch) => {
  console.log(data)
  dispatch({ type: actionTypes.SET_MODALS, payload: data })
}

export const getPrimaryAddress = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await blanjaApi.get(`v1/address`, config);

    dispatch({ type: actionTypes.SET_ADDRESS, payload: response.data.data[0] })
  } catch (error) {
    return error;
  }
}

export const getAllAddress = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await blanjaApi.get(`v1/address/all`, config);

    dispatch({ type: actionTypes.GET_ADDRESS, payload: response.data.data })
  } catch (error) {
    return error;
  }
}

export const deleteAddress = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await blanjaApi.delete(`v1/address/${id}`, config)

    toast.success('Successfully delete address!', { position: toast.POSITION.TOP_CENTER })
  } catch (error) {
    return error;
  }
}