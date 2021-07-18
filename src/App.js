import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Seller from "./pages/Profile/Seller";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/seller" component={Seller} />
        <Route path="/seller/update/:id" component={Seller} />
        <Route path="/seller/products" component={Seller} />
        <Route path="/seller/orders" component={Seller} />
        <Route path="/seller/cancel" component={Seller} />
        <Route path="/seller/add-product" component={Seller} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
