import styles from "./checkout.module.css";
import Button from "../../components/base/Button";
import Nav from "../../components/module/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  checkotOrder,
  fetchOrders,
} from "../../configs/redux/actions/orderAction";
import ModalPayment from "../../components/base/Modal/ModalPayment";
import ButtonModal from "../../components/base/ButtonModal";
import { Link, useHistory } from "react-router-dom";
import jwt from "jwt-decode";
import { getPrimaryAddress } from "../../configs/redux/actions/addressActions";
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Checkout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = jwt(localStorage.getItem("token"));
  const userId = user.id;

  useEffect(() => {
    dispatch(fetchOrders(userId));
    dispatch(getPrimaryAddress());
  }, [dispatch, userId]);

  const { orders, orderdetails } = useSelector((state) => state.orders);
  const { address } = useSelector((state) => state.address);

  const handlePayment = (id) => {
    const data = {
      id,
      status: "ordered",
      addressId: address.id
    };
    dispatch(checkotOrder(data, history)).then((res) =>
      dispatch(fetchOrders(userId))
    );
  };

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <Nav />

      <div className={`container ${styles.marginTopBody}`}>
        <div className="row">
          <h3 className={styles.pageTitle}>Checkout</h3>
          <div className="col-md-8 left">
            <h5 className={styles.shippingTitle}>Shipping Address</h5>
            <div className={styles.infoAddress}>
              {address && (
                <>
                  <h5 className={styles.name}>{address.name}</h5>
                  <span className={styles.address}>
                    {address.address + ' ' + address.city + ' ' + address.zipCode + ' '} ( {address.type} )
                  </span>
                  <Button
                    type="button"
                    title="Choose another address"
                    myClass="chooseAddress"
                  />
                </>
              )}
              {!address && (
                <>
                  <h5 className={styles.warn}>You haven't entered the address yet. Want to add now?</h5>
                  <Link to='/user/address' className={styles.buttonAddAddress}>Add address</Link>
                </>
              )}
            </div>
            {orderdetails &&
              orderdetails.map((item, index) => (
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

          {orders &&
            orders.map((item, index) => (
              <div className={`col-md-4 ${styles.right}`} key={index}>
                <h5 className={styles.shippingTitle}>Shopping summary</h5>
                <div className={styles.subTotal}>
                  <span className={styles.subTitle}>Order</span>
                  <span class="price">Rp {item.subTotal}</span>
                </div>
                <div className={styles.subTotal}>
                  <span className={styles.subTitle}>Delivery</span>
                  <span class="price">Rp 0</span>
                </div>
                <hr />
                <div className={styles.subTotal}>
                  <h5 className={styles.shippingTitle}>Shopping summary</h5>
                  <span className={styles.priceTotal}>Rp {item.subTotal}</span>
                </div>
                <ButtonModal
                  target="#exampleModalToggle"
                  label="Select Payment"
                  ownClass="payment"
                  disabled={!address}
                />
              </div>
            ))}
        </div>
      </div>
      {orders &&
        orders.map((item) => (
          <ModalPayment
            handlePayment={() => handlePayment(item.id)}
            subTotal={item.subTotal}
          />
        ))}
    </>
  );
};

export default Checkout;
