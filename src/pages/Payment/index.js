import styles from "./payment.module.css";
import Nav from "../../components/module/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getOrderById,
  paymentConfirm,
} from "../../configs/redux/actions/orderAction";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getOrderById(id));
  }, [dispatch, id]);

  const { order } = useSelector((state) => state.orders);

  const handleInput = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    const files = document.querySelector('input[type="file"]').files[0];
    const data = new FormData();
    data.append("name", name);
    data.append("image", files);

    dispatch(paymentConfirm(id, data, history));
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

          {order && (
              <div className={`col-md-4 ${styles.right}`}>
                <div className={styles.paymentConfirm}>
                  <h5 className={styles.paymentTitle}>Payment confirmation</h5>
                  <span className={`{styles.subTitle} mb-2`}>
                    To complete the order, please make a payment to BCA
                    7362911280 a/n Blanja Commerce
                  </span>

                  <hr />
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Account Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">
                      Proof of Transfer
                    </label>
                    <input
                      type="file"
                      name="payment"
                      id="payment"
                      className="form-control"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleConfirm}
                    className="btn btn-danger btn-sm"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Payment;
