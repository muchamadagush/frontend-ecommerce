import styles from "./shipping.module.css"
import ButtonModal from "../../../../base/ButtonModal"

const Shipping = () => {
  return (
    <>
      <div className={styles.contentBody}>
        <h3 className={styles.title}>My Profile</h3>
        <span className={styles.subTitle}>Manage your profile information</span>
        <hr />
        
        <div className={styles.address}>
          <ButtonModal title="Choose another address" ownClass="buttonBorderDashed" label="Add new
            address" target="#exampleModal2" />
          <div className={styles.addressActive}>
            <h5>Andreas Jane</h5>
            <span>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah,
              53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</span>
            <button>Change address</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shipping
