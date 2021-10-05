import styles from "./detailOrder.module.css";
import Nav from "../../components/module/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getOrderById,
  getPayment,
  updateStatusOrder,
} from "../../configs/redux/actions/orderAction";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailOrder = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [status, setStatus] = useState("");

  useEffect(() => {
    dispatch(getOrderById(id));
    dispatch(getPayment(id));
  }, [dispatch, id]);

  const { order, detail } = useSelector((state) => state.orders);

  const handleInput = (e) => {
    e.preventDefault();

    setStatus(e.target.value);
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    const data = {
      status,
    };

    dispatch(updateStatusOrder(id, data, history));
  };

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <Nav />

      <div className={`container ${styles.marginTopBody}`}>
        <div className="row">
          <h3 className={styles.pageTitle}>Payment</h3>
          <div className="col-md-8 left">
            {order &&
              order.map((item, index) => (
                <div className={styles.item} key={index}>
                  <div className={styles.images}>
                    <img
                      className={styles.image}
                      src={`${process.env.REACT_APP_API_URL}files/${item.image[0]}`}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className={styles.productTitle}>{item.title}</h5>
                    <span className={styles.productStore}>Zalora Cloth</span>
                  </div>
                  <p className={styles.productPrice}>
                    Rp {item.price * item.qty}
                  </p>
                </div>
              ))}
          </div>

          {detail && (
            <div className={`col-md-4 ${styles.right}`}>
              <div className={styles.paymentConfirm}>
                <h5 className={styles.paymentTitle}>Payment Detail</h5>
                <div className="mb-3">
                  <label for="name" class="form-label">
                    Account Name :
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    value={detail.name}
                    aria-label="Disabled input example"
                    id="name"
                    disabled
                    readonly
                  />
                </div>

                <div className="mb-3">
                  <label for="name" class="form-label">
                    Transfer Date :
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    value={detail.createdAt}
                    aria-label="Disabled input example"
                    id="name"
                    disabled
                    readonly
                  />
                </div>

                <div className={styles.imagePayment}>
                  <img
                    className={styles.image}
                    src={`${process.env.REACT_APP_API_URL}files/${detail.image}`}
                    alt="imgPay"
                  />
                </div>

                <hr />

                <label className="form-label">Update Status Order :</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="status"
                  onChange={handleInput}
                >
                  <option value="">Choose Option</option>
                  <option value="Paid">Paid</option>
                  <option value="Packaged">Packaged</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Cancel">Cancel</option>
                </select>
                <div className="mb-3"></div>

                <button
                  type="button"
                  onClick={handleConfirm}
                  className="btn btn-danger btn-sm"
                >
                  Update
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailOrder;
