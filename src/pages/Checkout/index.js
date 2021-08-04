import styles from "./checkout.module.css";
import Button from "../../components/base/Button";
import Nav from "../../components/module/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrders, updateStatusOrder } from "../../configs/redux/actions/orderAction";
import ModalPayment from "../../components/base/Modal/ModalPayment";
import ButtonModal from "../../components/base/ButtonModal";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem('user'))
  const userId = user.id

  useEffect(() => {
    dispatch(fetchOrders(userId))
  }, [dispatch, userId])

  const { orders, orderdetails } = useSelector(state => state.orders)

  const handlePayment = (id) => {
    const data = {
      status: "ordered"
    }
    dispatch(updateStatusOrder(id, data, history))
      .then((res) => dispatch(fetchOrders(userId)))
  }
  return (
    <>
      <Nav />

      <div className={`container ${styles.marginTopBody}`}>
        <div className="row">
          <h3 className={styles.pageTitle}>Checkout</h3>
          <div className="col-md-8 left">
            <h5 className={styles.shippingTitle}>Shipping Address</h5>
            <div className={styles.infoAddress}>
              <h5 className={styles.name}>Andreas Jane</h5>
              <span className={styles.address}>
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                16] Sokaraja, Kab. Banyumas, 53181
              </span>
              <Button type="button" title="Choose another address" myClass="chooseAddress" />
            </div>
            {orderdetails && orderdetails.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.images}>
                  <img className={styles.image} src={`${process.env.REACT_APP_API_URL}files/${item.image[0]}`} alt="" />
                </div>
                <div>
                  <h5 className={styles.productTitle}>{item.title}</h5>
                  <span className={styles.productStore}>Zalora Cloth</span>
                </div>
                <p className={styles.productPrice}>Rp {item.price * item.qty}</p>
              </div>
            ))}
          </div>

          {orders && orders.map((item, index) => (
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
              <ButtonModal target="#exampleModalToggle" label="Select Payment" ownClass="payment" />
            </div>
          ))}
        </div>
      </div>
      {orders && orders.map((item) => (
        <ModalPayment handlePayment={() => handlePayment(item.id)} subTotal={item.subTotal} />
      ))}
    </>
  );
};

export default Checkout;
