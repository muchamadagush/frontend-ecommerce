import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Carts from "./pages/Carts";
import Checkout from "./pages/Checkout";
import Seller from "./pages/Profile/Seller";
import Login from './pages/auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={Product} />
        <Route path="/carts" component={Carts} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/seller" component={Seller} />
        <Route path="/seller/update/:id" component={Seller} />
        <Route path="/seller/products" component={Seller} />
        <Route path="/seller/orders" component={Seller} />
        <Route path="/seller/cancel" component={Seller} />
        <Route path="/seller/add-product" component={Seller} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
