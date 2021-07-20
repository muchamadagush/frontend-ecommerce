import styles from '../SellingProduct/sellingProduct.module.css'
import Button from '../../../../../base/Button'
import Input from '../../../../../base/Input'
import { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../../../api';

const UpdateProduct = ({ categories, colors }) => {
  const { id } = useParams()
  const productId = id
  
  const [formUpload, setFormUpload] = useState({
    categoryId: 0,
    title: '',
    description: '',
    price: 0,
    stock: 0,
    type: '',
    color: '',
    mainImage: '',
    status: ''
  });

  useEffect(() => {
    axios
      .get(`${API_URL}products/${productId}`)
      .then((res) => {
        setFormUpload({
          categoryId: res.data.data[0].category_id,
          title: res.data.data[0].title,
          description: res.data.data[0].description,
          price: res.data.data[0].price,
          stock: res.data.data[0].stock,
          type: res.data.data[0].type,
          color: res.data.data[0].color,
          mainImage: res.data.data[0].mainImage,
          status: res.data.data[0].status
        })
        console.log(res.data.data[0])
      })
      .catch((error) => {
        alert('Internal server error')
      })
  }, [productId])

  const handleChange = (e) => {
    e.preventDefault();
    setFormUpload({
      ...formUpload,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URL}products/${id}`, formUpload)
      .then(() => {
        alert('Successfully update data')
        return <Redirect to="/seller/products" />
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
            <label htmlFor="title" class={`d-block ${styles.label}`}>Name of goods</label>
            <Input type="text" name="title" id="title" myOwnClass="form-control" value={formUpload.title} actionChange={handleChange} />
          </div>

          <div className={styles.itemDetails}>
            <h5 className={styles.title}>Item Details</h5>
            <hr />
            <label htmlFor="price" className={`d-block ${styles.label}`}>Unit price</label>
            <Input type="number" name="price" id="price" myOwnClass="form-control" value={formUpload.price} actionChange={handleChange} />
            <label htmlFor="stock" className={`d-block ${styles.label}`}>Stock</label>
            <Input type="number" name="stock" id="stock" myOwnClass="form-control" value={formUpload.stock} actionChange={handleChange} />
            <label htmlFor="status" className={`d-block ${styles.label}`}>Status</label>
            <Input type="text" name="status" id="status" myOwnClass="form-control" value={formUpload.status} actionChange={handleChange} />
            <label htmlFor="category" className={`d-block ${styles.label}`}>Category</label>
            <select name="categoryId" class="form-select" aria-label="Default select example" value={formUpload.categoryId} onChange={handleChange}>
              <option selected>Choose category</option>
              {categories && categories.map((item, index) => (
                <option value={item.id} key={index}>{item.title}</option>
              ))}
            </select>

            <label htmlFor="color" className={`d-block ${styles.label}`}>Colors</label>
            <select name="color" class="form-select" aria-label="Default select example" value={formUpload.color} onChange={handleChange}>
              <option selected>Choose Color</option>
              {colors && colors.map((item, index) => (
                <option value={item.title} key={index}>{item.title}</option>
              ))}
            </select>
            <label className={`d-block ${styles.label}`}>Type</label>
            <div className="d-flex">
              <Input type="radio" name="type" myOwnClass="form-check-input p-0" value="new" actionChange={handleChange} /> <span className={`ms-2 mt-0 ${styles.label}`}>Baru</span>
            </div>
            <div className="d-flex">
              <Input myOwnClass="form-check-input p-0" type="radio" name="type" value="second" actionChange={handleChange} /> <span className={`ms-2 mt-0 ${styles.label}`}>Bekas</span>
            </div>
          </div>

          <div className={styles.photoOfGoods}>
            <h5 className={styles.title}>Photo of goods</h5>
            <hr />

            <Input type="text" name="mainImage" myOwnClass="form-control" value={formUpload.mainImage} actionChange={handleChange} />
          </div>

          <div className={styles.description}>
            <h5 className={styles.title}>Description</h5>
            <hr />
            <textarea name="description" id="description" cols="30" rows="10" value={formUpload.description} onChange={handleChange}></textarea>
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
