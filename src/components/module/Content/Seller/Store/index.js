import Button from '../../../../base/Button'
import styles from './store.module.css'

const Store = () => {
  return (
    <>
      <div className={styles.contentBody}>
        <h3 className={styles.title}>My Profile</h3>
        <span className={styles.subTitle}>Manage your profile information</span>
        <hr />

        <form>
          <div className="row">
            <div className="col-md-8">
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label for="name" className={`col-form-label ${styles.labelColor}`}>Name</label>
                </div>
                <div className="col-md-9">
                  <input type="text" id="name" className={`form-control ${styles.formControl}`} />
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label for="email" className={`col-form-label ${styles.labelColor}`}>Email</label>
                </div>
                <div className="col-md-9">
                  <input type="email" id="email" className={`form-control ${styles.formControl}`} />
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label for="phone" className={`col-form-label ${styles.labelColor}`}>Phone Number</label>
                </div>
                <div className="col-md-9">
                  <input type="number" id="phone" className={`form-control ${styles.formControl}`} />
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label for="description" className={`col-form-label ${styles.labelColor}`}>Store Description</label>
                </div>
                <div className="col-md-9">
                  <textarea name="description" id="description" cols="" rows="3" className={`form-control ${styles.formControl}`}></textarea>
                </div>
              </div>
            </div>

            <div className={`col-md-4 ${styles.right} flex flex-column`}>
              <img className={styles.chooseImage} src="../../asset/profile-image.svg" alt="choosedImage" />
              <Button type="button" title="Select Image" myClass="selectImage" />
            </div>
          </div>
          <Button type="submit" title="Save" myClass="submit" />
        </form>
      </div>
    </>
  )
}

export default Store
