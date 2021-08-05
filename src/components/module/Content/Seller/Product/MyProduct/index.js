import { AllItem, Archived, SoldOut } from '../Components'
import styles from './myProduct.module.css'

const MyProduct = () => {
  return (
    <>
      <div className={styles.contentBody}>
        <h3 className={styles.title}>My Products</h3>

        <ul class={`nav`} id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button className={`${styles.myTabs} nav-link tab active`} id="pills-all-item-tab" data-bs-toggle="pill" data-bs-target="#pills-all-item" type="button" role="tab" aria-controls="pills-all-item" aria-selected="true">All Item</button>
          </li>
          <li class="nav-item" role="presentation">
            <button className={`nav-link tab ${styles.myTabs}`} id="pills-sold-out-tab" data-bs-toggle="pill" data-bs-target="#pills-sold-out" type="button" role="tab" aria-controls="pills-sold-out" aria-selected="false">Sold out</button>
          </li>
          <li class="nav-item" role="presentation">
            <button className={`nav-link tab ${styles.myTabs}`} id="pills-archived-tab" data-bs-toggle="pill" data-bs-target="#pills-archived" type="button" role="tab" aria-controls="pills-archived" aria-selected="false">Archived</button>
          </li>
        </ul>

        <hr className="my-0" />

        <div class="data mt-3">
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-all-item" role="tabpanel" aria-labelledby="pills-all-item-tab">
              <AllItem />
            </div>
            <div class="tab-pane fade" id="pills-sold-out" role="tabpanel" aria-labelledby="pills-sold-out-tab">
              <SoldOut />
            </div>
            <div class="tab-pane fade" id="pills-archived" role="tabpanel" aria-labelledby="pills-archived-tab">
              <Archived />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProduct
