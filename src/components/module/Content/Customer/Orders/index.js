import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllOrders } from '../../../../../configs/redux/actions/orderAction'
import Button from '../../../../base/Button'
import styles from './orders.module.css'

const Orders = () => {
  const dispatch = useDispatch()
  const { profile } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchAllOrders(profile.id))
  }, [dispatch, profile.id])

  const { allItem } = useSelector(state => state.orders)
  
  const handleShowDetail = () => {
    console.log("click")
  }

  return (
    <>
      <div className={styles.contentBody}>
        <h3 className={styles.title}>My Order</h3>

        <ul class={`nav`} id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button className={`${styles.myTabs} nav-link tab active`} id="pills-all-item-tab" data-bs-toggle="pill" data-bs-target="#pills-all-item" type="button" role="tab" aria-controls="pills-all-item" aria-selected="true">All items</button>
          </li>
          <li class="nav-item" role="presentation">
            <button className={`nav-link tab ${styles.myTabs}`} id="pills-not-yet-paid-tab" data-bs-toggle="pill" data-bs-target="#pills-not-yet-paid" type="button" role="tab" aria-controls="pills-not-yet-paid" aria-selected="false">Not yet paid</button>
          </li>
          <li class="nav-item" role="presentation">
            <button className={`nav-link tab ${styles.myTabs}`} id="pills-processed-tab" data-bs-toggle="pill" data-bs-target="#pills-processed" type="button" role="tab" aria-controls="pills-processed" aria-selected="false">Packed</button>
          </li>
          <li class="nav-item" role="presentation">
            <button className={`nav-link tab ${styles.myTabs}`} id="pills-sent-tab" data-bs-toggle="pill" data-bs-target="#pills-sent" type="button" role="tab" aria-controls="pills-sent" aria-selected="false">Sent</button>
          </li>
          <li class="nav-item" role="presentation">
            <button className={`nav-link tab ${styles.myTabs}`} id="pills-completed-tab" data-bs-toggle="pill" data-bs-target="#pills-completed" type="button" role="tab" aria-controls="pills-completed" aria-selected="false">Completed</button>
          </li>
          <li class="nav-item" role="presentation">
            <button className={`nav-link tab ${styles.myTabs}`} id="pills-cancel-tab" data-bs-toggle="pill" data-bs-target="#pills-cancel" type="button" role="tab" aria-controls="pills-cancel" aria-selected="false">Order cancel</button>
          </li>
        </ul>

        <hr className="mt-0" />

        <div class="data mt-3">
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-all-item" role="tabpanel" aria-labelledby="pills-all-item-tab">
              <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>Invoice</th>
                    <th>Created At</th>
                    <th>Sub Total</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {allItem && allItem.map((item, index) => (
                  <tr key={index}>
                    <td>{item.invoice}</td>
                    <td>{(item.createdAt).split('').splice(0, 10).join('')}</td>
                    <td>{item.subTotal}</td>
                    <td>{item.status}</td>
                    <td>
                      <Button type="button" title="Detail" ownClass="btn btn-sm btn-warning w-100 h-100 border-0" clickAction={() => handleShowDetail(item.id)} />
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="pills-not-yet-paid" role="tabpanel" aria-labelledby="pills-not-yet-paid-tab">
            <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Store</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Store</td>
                    <td>Qty</td>
                    <td>Price</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="pills-processed" role="tabpanel" aria-labelledby="pills-processed-tab">
            <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Store</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Store</td>
                    <td>Qty</td>
                    <td>Price</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="pills-sent" role="tabpanel" aria-labelledby="pills-sent-tab">
            <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Store</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Store</td>
                    <td>Qty</td>
                    <td>Price</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="pills-completed" role="tabpanel" aria-labelledby="pills-completed-tab">
            <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Store</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Store</td>
                    <td>Qty</td>
                    <td>Price</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="pills-cancel" role="tabpanel" aria-labelledby="pills-cancel-tab">
            <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Store</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Store</td>
                    <td>Qty</td>
                    <td>Price</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders
