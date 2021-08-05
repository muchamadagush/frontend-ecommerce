import styles from "./customer.module.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Profile from "../../../components/module/Content/Customer/Profile";
import Nav from "../../../components/module/Navbar";
import AsideCustomer from "../../../components/module/AsideCustomer";
import Shipping from "../../../components/module/Content/Customer/Shipping";
import Orders from "../../../components/module/Content/Customer/Orders";

const Customer = () => {
  return (
    <>
      <Nav />

      <div className="row">
        <div className={`col-md-3 ${styles.paddingTopBody}`}>
          <AsideCustomer />
        </div>

        <div className={`col-md-9 ${styles.content}`}>
          <Switch>
            <Route path='/user/profile' component={Profile} />
            <Route path='/user/address' component={Shipping} />
            <Route path='/user/orders' component={Orders} />
            <Route><Redirect to="/seller/store" /></Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Customer;
