import axios from "axios"

export const login = (data, history) => (dispatch) => {
  axios.post(`${process.env.REACT_APP_API_URL}v1/users/login`, data)
    .then((res) => {
      const resultLogin = res.data.user
      dispatch({ type: 'LOGIN_USER', payload: resultLogin })
      localStorage.setItem('token', resultLogin.token)
      history.push('/')
    })
    .catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', payload: err.response.data })
      alert(err.response.data)
    })
}