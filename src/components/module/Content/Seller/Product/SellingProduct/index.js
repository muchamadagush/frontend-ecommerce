import styles from "./sellingProduct.module.css";
import Button from "../../../../../base/Button";
import Input from "../../../../../base/Input";
import { useEffect, useState } from "react";
import apiBlanja from "../../../../../../configs/api/blanjaApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../../../configs/redux/actions/categoryAction";
import { useHistory } from "react-router-dom";
import { setProducts } from "../../../../../../configs/redux/actions/productAction";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SellingProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [colors, setColors] = useState([]);
  const [formUpload, setFormUpload] = useState({
    title: "",
    price: "",
    stock: "",
    type: "",
    description: "",
    categoryId: "",
    color: "",
  });

  useEffect(() => {
    dispatch(fetchCategories());

    apiBlanja
      .get(`v1/colors`)
      .then((response) => {
        setColors(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  
  const handleInput = (e) => {
    e.preventDefault();
    setFormUpload({
      ...formUpload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const files = document.querySelector('input[type="file"]').files
    const data = new FormData();
    data.append('title', formUpload.title)
    data.append('price', formUpload.price)
    data.append('stock', formUpload.stock)
    data.append('type', formUpload.type)
    data.append('description', formUpload.description)
    data.append('categoryId', formUpload.categoryId)
    data.append('color', formUpload.color)
    for (let i = 0; i < files.length; i++) {
      data.append('image', files[i])
    };

    dispatch(setProducts(data, history))
    .then(
      (res) => history.push('/seller/products'),
      (err) => toast(err.response.data.message),
    )
    window.scrollTo(0, 0)
  };

  const { categories } = useSelector((state) => state.categories);
  
  return (
    <>
      <div className={styles.contentBody}>
        <form onSubmit={handleSubmit} enctype="multipart/form-data" id="myForm">
          <div className={styles.inventory}>
            <h5 className={styles.title}>Inventory</h5>
            <hr />
            <label htmlFor="title" className={`d-block ${styles.label}`}>
              Name of goods
            </label>
            <Input
              type="text"
              name="title"
              id="title"
              myOwnClass="form-control rounded"
              myClass="formInputProduct"
              actionChange={handleInput}
            />
          </div>

          <div className={styles.itemDetails}>
            <h5 className={styles.title}>Item Details</h5>
            <hr />
            <label htmlFor="price" className={`d-block ${styles.label}`}>
              Unit price
            </label>
            <Input
              type="number"
              name="price"
              id="price"
              myOwnClass="form-control rounded"
              myClass="formInputProduct"
              actionChange={handleInput}
            />
            <label htmlFor="stock" className={`d-block ${styles.label}`}>
              Stock
            </label>
            <Input
              type="number"
              name="stock"
              id="stock"
              myOwnClass="form-control rounded"
              myClass="formInputProduct"
              actionChange={handleInput}
            />
            <label htmlFor="category" className={`d-block ${styles.label}`}>
              Category
            </label>
            <select
              name="categoryId"
              class="form-select"
              aria-label="Default select example"
              onChange={handleInput}
            >
              <option selected>Choose category</option>
              {categories &&
                categories.map((item, index) => (
                  <option value={item.id} key={index}>
                    {item.title}
                  </option>
                ))}
            </select>

            <label htmlFor="color" className={`d-block ${styles.label}`}>
              Colors
            </label>
            <select
              name="color"
              class="form-select"
              aria-label="Default select example"
              onChange={handleInput}
            >
              <option selected>Choose Color</option>
              {colors &&
                colors.map((item, index) => (
                  <option value={item.title} key={index}>
                    {item.title}
                  </option>
                ))}
            </select>
            <label className={`d-block ${styles.label}`}>Type</label>
            <div className="d-flex">
              <Input
                type="radio"
                name="type"
                myOwnClass="form-check-input p-0"
                value="new"
                actionChange={handleInput}
              />{" "}
              <span className={`ms-2 mt-0 ${styles.label}`}>Baru</span>
            </div>
            <div className="d-flex">
              <Input
                myOwnClass="form-check-input p-0"
                type="radio"
                name="type"
                value="second"
                actionChange={handleInput}
              />{" "}
              <span className={`ms-2 mt-0 ${styles.label}`}>Bekas</span>
            </div>
          </div>

          <div className={styles.photoOfGoods}>
            <h5 className={styles.title}>Photo of goods</h5>
            <hr />

            <input
              type="file"
              name="image"
              id=""
              onChange={handleInput}
              accept="image/jpeg, image/png, image/jpg"
              className={styles.photo}
              multiple
            />
          </div>

          <div className={styles.description}>
            <h5 className={styles.title}>Description</h5>
            <hr />
            <textarea
              name="description"
              id="description"
              className="form-control"
              cols="30"
              rows="10"
              onChange={handleInput}
            ></textarea>
          </div>

          <div className="button-submit">
            <Button myClass="submit" title="Jual" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SellingProduct;
