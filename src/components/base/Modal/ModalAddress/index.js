/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./modalAddress.module.css";
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { addNewAddress, getAllAddress, setModal } from "../../../../configs/redux/actions/addressActions";

const addAddress = () => {
  const dispatch = useDispatch()
  const { modal } = useSelector(state => state.address)
  const handleSetModal = () => {
    dispatch(setModal(!modal))
  }

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    type: "",
    zipCode: "",
    city: "",
    setPrimary: false,
  });

  const handleChangeInput = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNewAddress = (e) => {
    e.preventDefault();
    dispatch(addNewAddress(form))
    .then(() => dispatch(getAllAddress()))
    setForm({
      name: "",
      address: "",
      phone: "",
      type: "",
      zipCode: "",
      city: "",
      setPrimary: false,
    });
    handleSetModal()
  };

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <div
        className={`modal fade ${styles.index}`}
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className={`modal-content ${styles.hFull}`}>
            <button
              type="button"
              className={styles.buttonClose}
              data-bs-dismiss="modal"
              onClick={handleSetModal}
            >
              X
            </button>
            <div className="modal-header justify-content-center">
              <h5 className={styles.title} id="exampleModalLabel">
                Add new address
              </h5>
            </div>
            <div className={`modal-body ${styles.w810}`}>
              <form onSubmit={handleAddNewAddress}>
                <div className="row my-3">
                  <label
                    className={`${styles.modalLabel} px-0`}
                    for="address-type"
                  >
                    Save address as (ex : home address, office address)
                  </label>
                  <input
                    type="text"
                    className={`${styles.modalInput} px-3`}
                    id="address-type"
                    placeholder="home address"
                    name="type"
                    value={form.type}
                    onChange={handleChangeInput}
                  />
                </div>

                <div className="row mb-3 justify-content-between">
                  <div className="col-sm-12 col-md-6 px-0">
                    <label className={styles.modalLabel} for="recipient-name">
                      Recipient’s name
                    </label>
                    <input
                      type="text"
                      className={`${styles.modalInput} ${styles.w350} px-3`}
                      id="recipient-name"
                      placeholder=""
                      name="name"
                      value={form.name}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className={`col-sm-12 col-md-6 ${styles.ps34}`}>
                    <label className={styles.modalLabel} for="recipient-phone">
                      Recipient's telephone number
                    </label>
                    <input
                      type="text"
                      className={`${styles.modalInput} ${styles.w350} px-3`}
                      id="recipient-phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-12 col-md-6 px-0">
                    <label
                      className={`${styles.modalLabel} d-block`}
                      for="address"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className={`${styles.modalInput} ${styles.w350} px-3`}
                      id="address"
                      name="address"
                      value={form.address}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className={`col-sm-12 col-md-6 ${styles.ps34}`}>
                    <label
                      className={`${styles.modalLabel} d-block`}
                      for="postal-code"
                    >
                      Postal code
                    </label>
                    <input
                      type="text"
                      className={`${styles.modalInput} ${styles.w350} px-3`}
                      id="postal-code"
                      name="zipCode"
                      value={form.zipCode}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-12 col-md-6 px-0">
                    <label className={styles.modalLabel} for="city">
                      City or Subdistrict
                    </label>
                    <input
                      type="text"
                      className={`${styles.modalInput} ${styles.w350} px-3`}
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="true"
                      id="flexCheckDefault"
                      name="setPrimary"
                      // eslint-disable-next-line eqeqeq
                      selected={form.setPrimary == 'true'}
                      onChange={handleChangeInput}
                    />
                    <label
                      className={`form-check-label ${styles.checkboxLabel}`}
                      for="flexCheckDefault"
                    >
                      Make it the primary address
                    </label>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-end mt-5">
                  <button
                    type="submit"
                    className={`btn ${styles.buttonModal} rounded-pill`}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default addAddress;
