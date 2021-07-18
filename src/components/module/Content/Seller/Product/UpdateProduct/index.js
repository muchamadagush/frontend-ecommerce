import styles from '../SellingProduct/sellingProduct.module.css'
import Button from '../../../../../base/Button'
import Input from '../../../../../base/Input'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../../../api';

const UpdateProduct = ({ categories, colors, products }) => {
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

  const handleChange = (e) => {
    e.preventDefault();
    setFormUpload({
      ...formUpload,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmitUpdate = () => {
    axios
    .put(`${API_URL}products/${id}`, formUpload)
    .then(() => {
      alert('Successfully update data')
    })
    .catch((error) => {
      alert('Internal server error')
    })
  }
  return (
    <>
      <div className={styles.contentBody}>
        <form onSubmit={handleSubmitUpdate}>
          <div className={styles.inventory}>
            <h5 className={styles.title}>Inventory</h5>
            <hr />
            <label htmlFor="title" class="d-block">Name of goods</label>
            <Input type="text" name="title" id="title" myOwnClass="form-control" actionChange={handleChange} />
          </div>

          <div className={styles.itemDetails}>
            <h5 className={styles.title}>Item Details</h5>
            <hr />
            <label htmlFor="price" className="d-block">Unit price</label>
            <Input type="number" name="price" id="price" myOwnClass="form-control" actionChange={handleChange} />
            <label htmlFor="stock" className="d-block">Stock</label>
            <Input type="number" name="stock" id="stock" myOwnClass="form-control" actionChange={handleChange} />
            <label htmlFor="category" className="d-block">Category</label>
            <select name="categoryId" class="form-select" aria-label="Default select example" onChange={handleChange}>
              <option selected>Choose category</option>
              {categories && categories.map((item, index) => (
                <option value={item.id} key={index}>{item.title}</option>
              ))}
            </select>

            <label htmlFor="color" className="d-block">Colors</label>
            <select name="color" class="form-select" aria-label="Default select example" onChange={handleChange}>
              <option selected>Choose Color</option>
              {colors && colors.map((item, index) => (
                <option value={item.title} key={index}>{item.title}</option>
              ))}
            </select>
            <label className="d-block">Type</label>
            <div className="d-flex">
              <Input type="radio" name="type" myOwnClass="form-check-input p-0" value="new" /> <span className="ms-2" actionChange={handleChange}>Baru</span>
            </div>
            <div className="d-flex">
              <Input myOwnClass="form-check-input p-0" type="radio" name="type" value="second" /> <span className="ms-2" actionChange={handleChange}>Bekas</span>
            </div>
          </div>

          <div className={styles.photoOfGoods}>
            <h5 className={styles.title}>Photo of goods</h5>
            <hr />

            <Input type="text" name="mainImage" myOwnClass="form-control" actionChange={handleChange} />
          </div>

          <div className={styles.description}>
            <h5 className={styles.title}>Description</h5>
            <hr />
            <textarea name="description" id="description" cols="30" rows="10" onChange={handleChange}></textarea>
          </div>

          <div className="button-submit">
            <Button myClass="submit" title="Jual" />
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdateProduct
