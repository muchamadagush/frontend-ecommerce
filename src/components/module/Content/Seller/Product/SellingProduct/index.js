import styles from './sellingProduct.module.css'
import Button from '../../../../../base/Button'
import Input from '../../../../../base/Input'

const SellingProduct = ({ handleInput, handleSubmit, categories, colors }) => {
return (
  <>
    <div className={styles.contentBody}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inventory}>
          <h5 className={styles.title}>Inventory</h5>
          <hr />
          <label htmlFor="title" className={`d-block ${styles.label}`}>Name of goods</label>
          <Input type="text" name="title" id="title" myOwnClass="form-control" actionChange={handleInput} />
        </div>

        <div className={styles.itemDetails}>
          <h5 className={styles.title}>Item Details</h5>
          <hr />
          <label htmlFor="price" className={`d-block ${styles.label}`}>Unit price</label>
          <Input type="number" name="price" id="price" myOwnClass="form-control" actionChange={handleInput} />
          <label htmlFor="stock" className={`d-block ${styles.label}`}>Stock</label>
          <Input type="number" name="stock" id="stock" myOwnClass="form-control" actionChange={handleInput} />
          <label htmlFor="category" className={`d-block ${styles.label}`}>Category</label>
          <select name="categoryId" class="form-select" aria-label="Default select example" onChange={handleInput}>
            <option selected>Choose category</option>
            {categories && categories.map((item, index) => (
              <option value={item.id} key={index}>{item.title}</option>
            ))}
          </select>

          <label htmlFor="color" className={`d-block ${styles.label}`}>Colors</label>
          <select name="color" class="form-select" aria-label="Default select example" onChange={handleInput}>
            <option selected>Choose Color</option>
            {colors && colors.map((item, index) => (
              <option value={item.title} key={index}>{item.title}</option>
            ))}
          </select>
          <label className={`d-block ${styles.label}`}>Type</label>
          <div className="d-flex">
            <Input type="radio" name="type" myOwnClass="form-check-input p-0" value="new" actionChange={handleInput} /> <span className={`ms-2 ${styles.label}`}>Baru</span>
          </div>
          <div className="d-flex">
            <Input myOwnClass="form-check-input p-0" type="radio" name="type" value="second" actionChange={handleInput} /> <span className={`ms-2 ${styles.label}`}>Bekas</span>
          </div>
        </div>

        <div className={styles.photoOfGoods}>
          <h5 className={styles.title}>Photo of goods</h5>
          <hr />

          <Input type="text" name="mainImage" myOwnClass="form-control" actionChange={handleInput} />
        </div>

        <div className={styles.description}>
          <h5 className={styles.title}>Description</h5>
          <hr />
          <textarea name="description" id="description" cols="30" rows="10" onChange={handleInput}></textarea>
        </div>

        <div className="button-submit">
          <Button myClass="submit" title="Jual" />
        </div>
      </form>
    </div>
  </>
)
}

export default SellingProduct
