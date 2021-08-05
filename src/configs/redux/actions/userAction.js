import blanjaApi from "../../api/blanjaApi";
import { actionTypes } from "../contants/actionTypes";

export const login = (data, history) => (dispatch) => {
  blanjaApi.post(`v1/users/login`, data)
    .then((res) => {
      const resultLogin = res.data.user
      dispatch({ type: 'LOGIN_USER', payload: resultLogin })
      localStorage.setItem('token', resultLogin.token)
      history.push('/')
    })
    .catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', payload: err.response.data.message })
      alert(err.response.data.message)
    })
}

export const register = (data, history) => async (dispatch) => {
  try {
    await blanjaApi.post(`v1/users/register`, data)
    dispatch({ type: actionTypes.SET_USER })
    history.push('/login')
  } catch (error) {
    alert(error.response.data.message)
  }
}

export const updateProfile = (id, data) => async (dispatch) => {
  try {
    const response = await blanjaApi.put(`v1/users/${id}`, data)
    dispatch({ type: actionTypes.UPDATE_USER, payload: response })
    return response
  } catch (error) {
    console.log(error.response)
    return error
  }
}