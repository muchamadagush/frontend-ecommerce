import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ component:Component, ...rest }) => {
  const user = localStorage.getItem('user')
  const dataUser = JSON.parse(user)
  const isAuth = dataUser.token
  return (
    <Route {...rest} render={(props) => {
      return isAuth ? <Redirect to="/" /> : <Component {...props} />
    }} />
  )
}

export default PublicRoute
