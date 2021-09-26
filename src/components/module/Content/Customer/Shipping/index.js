import styles from "./shipping.module.css"
import ButtonModal from "../../../../base/ButtonModal"
import ModalAddress from "../../../../base/Modal/ModalAddress"
import { useDispatch, useSelector } from "react-redux"
import { setModal } from "../../../../../configs/redux/actions/addressActions"
import { toast, ToastContainer, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Shipping = () => {
  const dispatch = useDispatch()
  const { modal } = useSelector(state => state.address)
  const handleSetModal = () => {
    dispatch(setModal(!modal))
  }

  const handleChangeAddress = () => {
    toast.info('In the development stage!', { position: toast.POSITION.TOP_CENTER })
  }

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <div className={styles.contentBody}>
        <h3 className={styles.title}>My Profile</h3>
        <span className={styles.subTitle}>Manage your profile information</span>
        <hr />
        
        <div className={styles.address}>
          <ButtonModal title="Choose another address" ownClass="buttonBorderDashed" label="Add new
            address" target="#exampleModal2" onClick={handleSetModal} />
          <div className={styles.addressActive}>
            <h5>Andreas Jane</h5>
            <span>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah,
              53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</span>
            <button onClick={handleChangeAddress}>Change address</button>
          </div>
        </div>
      </div>
      <ModalAddress />
    </>
  )
}

export default Shipping
