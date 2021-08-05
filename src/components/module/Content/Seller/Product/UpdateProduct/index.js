import styles from '../SellingProduct/sellingProduct.module.css'
import Button from '../../../../../base/Button'
import Input from '../../../../../base/Input'
import { useEffect, useState } from 'react';
import {  useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, updateProduct } from '../../../../../../configs/redux/actions/productAction';
import { fetchCategories } from '../../../../../../configs/redux/actions/categoryAction';
import { fetchColors } from '../../../../../../configs/redux/actions/colorAction';
import InputCheckbox from '../../../../../base/InputCheckbox';

const UpdateProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const [formUpload, setFormUpload] = useState({
    categoryId: 0,
    title: '',
    description: '',
    price: 0,
    stock: 0,
    type: '',
    color: '',
    image: [],
    oldImage: [],
    imagePreview: [],
    status: ''
  });

  const setData = (data) => {
    setFormUpload({
      categoryId: data.category_id,
      title: data.title,
      description: data.description,
      price: data.price,
      stock: data.stock,
      type: data.type,
      color: data.color,
      oldImage: data.image,
      status: data.status,
    })
  }

  useEffect(() => {
    dispatch(fetchProduct(id))
      .then((res) => setData(res))
    dispatch(fetchCategories())
    dispatch(fetchColors())
  }, [id, dispatch])

  let imageViews = []
  for (let i = 0; i < formUpload.oldImage.length; i++) {
    imageViews.push(`${process.env.REACT_APP_API_URL}files/${formUpload.oldImage[i]}`)
  }

  const handleChangeFile = (e) => {
    const files = [...e.target.files]
    setFormUpload({
      ...formUpload,
      image: e.target.files,
      imagePreview: files.map((item) => URL.createObjectURL(item))
    })
  }

  const { categories } = useSelector(state => state.categories)
  const { colors } = useSelector(state => state.colors)

  const handleChange = (e) => {
    e.preventDefault();
    setFormUpload({
      ...formUpload,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmitUpdate = (e) => {
    e.preventDefault();

    const files = document.querySelector('input[type="file"]').files
    const data = new FormData();
    data.append('title', formUpload.title)
    data.append('price', formUpload.price)
    data.append('stock', formUpload.stock)
    data.append('type', formUpload.type)
    data.append('status', formUpload.status)
    data.append('description', formUpload.description)
    data.append('categoryId', formUpload.categoryId)
    data.append('color', formUpload.color)
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        data.append('image', files[i])
      };
    } else {
      for (let i = 0; i < formUpload.oldImage.length; i++) {
        data.append('image', formUpload.oldImage[i])
      };
    }
console.log(data)
    dispatch(updateProduct(id, data, history))
  }

  return (
    <>
      <div className={styles.contentBody}>
        <form onSubmit={handleSubmitUpdate} enctype="multipart/form-data">
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
            <label htmlFor="categoryId" className={`d-block ${styles.label}`}>Category</label>
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
              <InputCheckbox type="radio" name="type" value="new" handleChange={handleChange} isChecked={formUpload.type === "new" ? true : false} /> <span className={`ms-2 mt-0 ${styles.label}`}>Baru</span>
            </div>
            <div className="d-flex">
              <InputCheckbox type="radio" name="type" value="second" handleChange={handleChange} isChecked={formUpload.type === "second" ? true : false} /> <span className={`ms-2 mt-0 ${styles.label}`}>Bekas</span>
            </div>
          </div>

          <div className={styles.photoOfGoods}>
            <h5 className={styles.title}>Photo of goods</h5>
            <hr />

            {formUpload.imagePreview ? (
              formUpload.imagePreview.map(item => (
                <img src={item} key={item} alt="UploadedImage" className="img-thumbnail img-fluid uploaded-img mr-2" />
              ))
            ) : imageViews.map((item) => (
              <img src={item} key={item} alt="UploadedImage" className="img-thumbnail img-fluid uploaded-img mr-2" />
            ))}

            <input
              type="file"
              name="image"
              onChange={handleChangeFile}
              accept="image/jpeg, image/png, image/jpg"
              multiple
            />

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
