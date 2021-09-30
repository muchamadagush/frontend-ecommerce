import styles from "./shipping.module.css";
import ButtonModal from "../../../../base/ButtonModal";
import ModalAddress from "../../../../base/Modal/ModalAddress";
import ModalUpdateAddress from "../../../../base/Modal/ModalUpdateAddress";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAddress,
  setModal,
} from "../../../../../configs/redux/actions/addressActions";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const Shipping = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { modal, allAddress } = useSelector((state) => state.address);
  const handleSetModal = () => {
    dispatch(setModal(!modal));
  };
  const [selectedId, setSelectedId] = useState('')

  useEffect(() => {
    dispatch(getAllAddress(user.id));
  }, [dispatch, user]);

  const handleChangeAddress = (id) => {
    setModal(setModal(!modal))
    setSelectedId(id)
  };

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <div className={styles.contentBody}>
        <h3 className={styles.title}>My Profile</h3>
        <span className={styles.subTitle}>Manage your profile information</span>
        <hr />

        <div className={styles.address}>
          <ButtonModal
            title="Choose another address"
            ownClass="buttonBorderDashed"
            label="Add new
            address"
            target="#exampleModal2"
            onClick={handleSetModal}
          />
          {allAddress &&
            allAddress.map((item) => (
              <div
                className={`${styles.allAddress} ${
                  item.status === "true" ? styles.addressActive : ""
                }`}
                key={item.id}
              >
                <h5>{item.name}</h5>
                <span>
                  {item.address + " " + item.city + " " + item.zipCode + " "} ({" "}
                  {item.type} )
                </span>
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3" onClick={() => handleChangeAddress(item.id)}>
                  Change address
                </button>
              </div>
            ))}
        </div>
      </div>
      <ModalAddress />
      <ModalUpdateAddress id={selectedId} />
    </>
  );
};

export default Shipping;
