import blanjaApi from "../../api/blanjaApi";
import { actionTypes } from "../contants/actionTypes";
import { toast } from 'react-toastify'

export const getUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await blanjaApi.get(`v1/users`, config);

    dispatch({ type: actionTypes.GET_USER, payload: response.data.data });
  } catch (error) {
    return error.response.data.message;
  }
};

export const login = (data, history) => (dispatch) => {
  blanjaApi
    .post(`v1/users/login`, data)
    .then((res) => {
      const resultLogin = res.data.user;
      dispatch({ type: "LOGIN_USER", payload: resultLogin });

      getUser()
      
      localStorage.setItem("token", resultLogin.token);
      history.push("/");
    })
    .catch((err) => {
      dispatch({ type: "LOGIN_ERROR", payload: err.response.data.message });
      alert(err.response.data.message);
    });
};

export const register = (data, history) => async (dispatch) => {
  try {
    await blanjaApi.post(`v1/users/register`, data);
    dispatch({ type: actionTypes.SET_USER });
    history.push("/login");
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const updateProfile = (data) => async (dispatch) => {
  try {
    console.log(data);
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await blanjaApi.patch(`v1/users`, data, config);
    getUser();
    toast.success('Successfully update profile!', { position: toast.POSITION.TOP_CENTER })
    return response;
  } catch (error) {
    toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER })
    return error;
  }
};
