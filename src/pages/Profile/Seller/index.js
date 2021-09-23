import styles from "./seller.module.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Store from "../../../components/module/Content/Seller/Store";
import MyProduct from "../../../components/module/Content/Seller/Product/MyProduct";
import SellingProduct from "../../../components/module/Content/Seller/Product/SellingProduct";
import Order from "../../../components/module/Content/Seller/Order";
import UpdateProduct from "../../../components/module/Content/Seller/Product/UpdateProduct";
import Nav from "../../../components/module/Navbar/NavbarProfile";
import { useState } from "react";
import Sidebar from "react-sidebar";
import Aside from "../../../components/module/Aside";

const Seller = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Nav handleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className={styles.containerSeller}>
        <div
          className={`${styles.paddingTopBody} ${styles.left} ${styles.isDesktop}`}
        >
          <Aside />
        </div>

        <div
          className={`${styles.paddingTopBody} ${styles.isMobile}`}
        >
          <Sidebar
            sidebar={<Aside />}
            open={sidebarOpen}
            onSetOpen={() => setSidebarOpen(!sidebarOpen)}
            styles={{ sidebar: { background: "white" } }}
          >
          </Sidebar>
        </div>

        <div className={`${styles.content} ${styles.right} ${sidebarOpen  !== true ? `${styles.index}` : '' }`}>
          <Switch>
            <Route path="/seller/store" component={Store} />
            <Route path="/seller/products" component={MyProduct} />
            <Route path="/seller/add-product" component={SellingProduct} />
            <Route path="/seller/orders" component={Order} />
            <Route path="/seller/update/:id" component={UpdateProduct} />
            <Route>
              <Redirect to="/seller/store" />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Seller;
