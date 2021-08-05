import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Carts from "../../pages/Carts";
import Checkout from "../../pages/Checkout";
import Seller from "../../pages/Profile/Seller";
import Customer from "../../pages/Profile/Customer";
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';
import PrivateRoute from './module/PrivateRoute';
import PublicRoute from './module/PublicRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/product/:id" component={Product} />
        <PrivateRoute path="/carts" component={Carts} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <PrivateRoute path="/seller" component={Seller} />
        <PrivateRoute path="/user" component={Customer} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <Route><Redirect to="/" /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
