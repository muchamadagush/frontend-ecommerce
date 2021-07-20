import styles from "./checkout.module.css";
import Button from "../../components/base/Button";
import Navbar from "../../components/module/Navbar/Core";
import Brand from "../../components/module/Navbar/Brand";
import Toggler from "../../components/module/Navbar/Toggler";
import Filter from "../../components/module/Navbar/Filter";
import NavRight from "../../components/module/Navbar/NavRight";
import Cart from "../../components/module/Navbar/Cart";
import Auth from "../../components/module/Navbar/Auth";

const Checkout = () => {
  return (
    <>
      <Navbar>
        <Brand />
        <Toggler>
          <Filter/>
          <NavRight>
            <Cart />
            <Auth />
          </NavRight>
        </Toggler>
      </Navbar>

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
            <div className={styles.item}>
              <div className={styles.images}>
                <img className={styles.image} src="../asset/image product.jpg" alt="" />
              </div>
              <div>
                <h5 className={styles.productTitle}>Men's formal suit - Black</h5>
                <span className={styles.productStore}>Zalora Cloth</span>
              </div>
              <p className={styles.productPrice}>$ 20.0</p>
            </div>
          </div>

          <div className={`col-md-4 ${styles.right}`} >
            <h5 className={styles.shippingTitle}>Shopping summary</h5>
            <div className={styles.subTotal}>
              <span className={styles.subTitle}>Order</span>
              <span class="price">$ 40.0</span>
            </div>
            <div className={styles.subTotal}>
              <span className={styles.subTitle}>Delivery</span>
              <span class="price">$ 5.0</span>
            </div>
            <hr />
            <div className={styles.subTotal}>
              <h5 className={styles.shippingTitle}>Shopping summary</h5>
              <span className={styles.priceTotal}>$ 45.0</span>
            </div>
            <Button type="button" title="Select Payment" myClass="payment" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
