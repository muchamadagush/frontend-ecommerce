import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchOrderBySeller } from "../../../../../../configs/redux/actions/orderAction"
import { Link } from "react-router-dom"
import styles from "../order.module.css"

const AllItems = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrderBySeller())
  }, [dispatch])

  const { seller } = useSelector(state => state.orders)

  return (
    <>
      <div class="data mt-3">
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-all-item" role="tabpanel" aria-labelledby="pills-all-item-tab">
              <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th>Invoice</th>
                    <th className={styles.isMobile}>Created At</th>
                    <th className={styles.isMobile}>Sub Total</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {seller && seller.map((item, index) => (
                  <tr key={index}>
                    <td>{item.invoice}</td>
                    <td className={styles.isMobile}>{(item.createdAt).split('').splice(0, 10).join('')}</td>
                    <td className={styles.isMobile}>{item.subTotal}</td>
                    <td>{item.status}</td>
                    <td>
                      <Link to={`/order/${item.id}`} className="btn btn-sm btn-warning w-100 h-100 border-0">Detail</Link>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>            
          </div>
        </div>
    </>
  )
}

export default AllItems
