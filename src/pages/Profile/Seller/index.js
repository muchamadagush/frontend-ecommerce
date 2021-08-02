import styles from "./seller.module.css";
import { useEffect, useState } from "react";
import { Route, Switch, useLocation, useParams } from "react-router-dom";
import Aside from "../../../components/module/Aside";
import Store from "../../../components/module/Content/Seller/Store";
import MyProduct from "../../../components/module/Content/Seller/Product/MyProduct";
import SellingProduct from "../../../components/module/Content/Seller/Product/SellingProduct";
import axios from "axios";
import Order from "../../../components/module/Content/Seller/Order";
import UpdateProduct from "../../../components/module/Content/Seller/Product/UpdateProduct";
import Navbar from "../../../components/module/Navbar/Core";
import Brand from "../../../components/module/Navbar/Brand";
import Toggler from "../../../components/module/Navbar/Toggler";
import NavRight from "../../../components/module/Navbar/NavRight";
import Account from "../../../components/module/Navbar/Account";

const Seller = (props) => {
  const { id } = useParams()
  const [formUpload, setFormUpload] = useState({
    title: "",
    price: 0,
    stock: 0,
    type: "",
    mainImage: "",
    description: "",
    categoryId: 0,
    color: ''
  });

  const location = useLocation()
  const url = location.pathname

  const handleDeleteProduct = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}v1/products/${id}`)
      .then(() => {
        alert('Successfully delete item!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleChangeInput = (e) => {
    e.preventDefault();
    setFormUpload({
      ...formUpload,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadProduct = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}products`, formUpload)
      .then(() => {
        alert("Successfully create product!")
      })
      .catch((error) => {
        alert(error)
      })
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}products/${id}`, formUpload)
      .then(() => {
        alert("Successfully update product!")
      })
      .catch((error) => {
        alert(error)
      })
    props.history.push(`/seller/products`)
  }

  return (
    <>
      <Navbar>
        <Brand />
        <Toggler>
          <NavRight>
            <Account />
          </NavRight>
        </Toggler>
      </Navbar>

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
