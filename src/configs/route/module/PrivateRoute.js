import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem('token')
  return (
    <Route {...rest} render={(props) => {
      return isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }} />
  )
}

export default PrivateRoute
