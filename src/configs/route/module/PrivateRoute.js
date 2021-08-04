import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component:Component, ...rest }) => {
  const user = localStorage.getItem('user')
  const dataUser = JSON.parse(user)
  const isAuth = dataUser.token
  return (
    <Route {...rest} render={(props) => {
      return isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }} />
  )
}

export default PrivateRoute
