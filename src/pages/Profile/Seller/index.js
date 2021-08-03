import styles from "./seller.module.css";
import { Route, Switch } from "react-router-dom";
import Aside from "../../../components/module/Aside";
import Store from "../../../components/module/Content/Seller/Store";
import MyProduct from "../../../components/module/Content/Seller/Product/MyProduct";
import SellingProduct from "../../../components/module/Content/Seller/Product/SellingProduct";
import Order from "../../../components/module/Content/Seller/Order";
import UpdateProduct from "../../../components/module/Content/Seller/Product/UpdateProduct";
import Nav from "../../../components/module/Navbar";

const Seller = () => {
  return (
    <>
      <Nav />

      <div className="row">
        <div className={`col-md-3 ${styles.paddingTopBody}`}>
          <Aside />
        </div>

        <div className={`col-md-9 ${styles.content}`}>
          <Switch>
            <Route path='/seller/store' component={Store} />
            <Route path='/seller/products' component={MyProduct} />
            <Route path='/seller/add-product' component={SellingProduct} />
            <Route path='/seller/orders' component={Order} />
            <Route path='/seller/update/:id' component={UpdateProduct} />
            <Route>404 Not Found</Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Seller;
