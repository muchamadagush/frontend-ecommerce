import styles from "./seller.module.css";
import Aside from "../../../components/module/Aside";
import Store from "../../../components/module/Content/Seller/Store";
import MyProduct from "../../../components/module/Content/Seller/Product/MyProduct";
import SellingProduct from "../../../components/module/Content/Seller/Product/SellingProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../api/index";
import { Redirect, useLocation, useParams } from "react-router-dom";
import Order from "../../../components/module/Content/Seller/Order";
import UpdateProduct from "../../../components/module/Content/Seller/Product/UpdateProduct";
import Navbar from "../../../components/module/Navbar/Core";
import Brand from "../../../components/module/Navbar/Brand";
import Toggler from "../../../components/module/Navbar/Toggler";
import NavRight from "../../../components/module/Navbar/NavRight";
import Account from "../../../components/module/Navbar/Account";

const Seller = (props) => {
  const { id } = useParams()
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([])
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

  useEffect(() => {
    axios
      .get(`${API_URL}category`)
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${API_URL}colors`)
      .then((response) => {
        setColors(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const handleDeleteProduct = (id) => {
    axios
      .delete(`${API_URL}products/${id}`)
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
      .post(`${API_URL}products`, formUpload)
      .then(() => {
        alert("Successfully create product!")
        return  <Redirect  to="/seller/products" />
      })
      .catch((error) => {
        alert(error)
      })

    props.history.push(`/seller/products`)
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URL}products/${id}`, formUpload)
      .then(() => {
        alert("Successfully create product!")
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <>
      <Navbar>
        <Brand />
        <Toggler>
          <NavRight>
            <Account role={'/seller'} />
          </NavRight>
        </Toggler>
      </Navbar>

      <div className="row">
        <div className={`col-md-3 ${styles.paddingTopBody}`}>
          <Aside />
        </div>

        <div className={`col-md-9 ${styles.content}`}>
          {url === '/seller' ?
          <Store /> :
          url === '/seller/products' ?
          <MyProduct
            handleDelete={handleDeleteProduct} /> :
          url === '/seller/add-product' ?
          <SellingProduct
            handleInput={handleChangeInput}
            handleSubmit={handleUploadProduct}
            categories={categories}
            colors={colors} /> :
          url === '/seller/orders' ?
          <Order /> : 
          <UpdateProduct
          handleSubmitUpdate={handleUpdateProduct}
          handleInput={handleChangeInput}
          categories={categories}
          colors={colors}
          />
          }
        </div>
      </div>
    </>
  );
};

export default Seller;
