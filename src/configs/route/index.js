import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Carts from "../../pages/Carts";
import Checkout from "../../pages/Checkout";
import Seller from "../../pages/Profile/Seller";
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/carts" component={Carts} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/seller" component={Seller} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route>404 Not Found</Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
