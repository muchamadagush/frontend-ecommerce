import styles from "./customer.module.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Profile from "../../../components/module/Content/Customer/Profile";
import Nav from "../../../components/module/Navbar/NavbarProfile";
import AsideCustomer from "../../../components/module/AsideCustomer";
import Shipping from "../../../components/module/Content/Customer/Shipping";
import Orders from "../../../components/module/Content/Customer/Orders";
import { useState } from "react";
import Sidebar from "react-sidebar";
import { useSelector } from "react-redux";

const Customer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { modal } = useSelector(state => state.address)

  console.log(modal)
  return (
    <>
      <Nav handleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className={styles.containerSeller}>
        <div
          className={`${styles.paddingTopBody} ${styles.left} ${styles.isDesktop}`}
        >
          <AsideCustomer />
        </div>

        <div
          className={`${styles.paddingTopBody} ${styles.isMobile}`}
        >
          <Sidebar
            sidebar={<AsideCustomer />}
            open={sidebarOpen}
            onSetOpen={() => setSidebarOpen(!sidebarOpen)}
            styles={{ sidebar: { background: "white" } }}
          >
          </Sidebar>
        </div>

        <div className={`${styles.content} ${styles.right} ${sidebarOpen  !== true ? `${styles.index}` : '' }`}>
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
