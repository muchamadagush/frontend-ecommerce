import Button from "../../../../base/Button";
import styles from "./store.module.css";
import profile from "../../../../../assets/images/profile-image.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getUser,
  updateProfile,
} from "../../../../../configs/redux/actions/userAction";
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Store = () => {
  const dispatch = useDispatch();
  const [imgPreview, setImgPreview] = useState("");

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const { user } = useSelector((state) => state.user);

  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    description: user.description,
  });

  const handleChange = (e) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFile = (e) => {
    e.preventDefault();
    const files = document.querySelector('input[type="file"]').files[0];
    setImgPreview(URL.createObjectURL(files));
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const files = document.querySelector('input[type="file"]').files[0];
    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("description", form.description);
    data.append("avatar", files);

    dispatch(updateProfile(data));
  };

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <div className={styles.contentBody}>
        <h3 className={styles.title}>My Profile</h3>
        <span className={styles.subTitle}>Manage your profile information</span>
        <hr />

        <form onSubmit={handleUpdateProfile} encType="multipart/form-data">
          <div className="row">
            <div className="col-md-8">
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label
                    for="name"
                    className={`col-form-label ${styles.labelColor}`}
                  >
                    Name
                  </label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`form-control ${styles.formControl}`}
                    onChange={handleChange}
                    value={form.name}
                  />
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label
                    for="email"
                    className={`col-form-label ${styles.labelColor}`}
                  >
                    Email
                  </label>
                </div>
                <div className="col-md-9">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`form-control ${styles.formControl}`}
                    onChange={handleChange}
                    value={form.email}
                  />
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label
                    for="phone"
                    className={`col-form-label ${styles.labelColor}`}
                  >
                    Phone Number
                  </label>
                </div>
                <div className="col-md-9">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className={`form-control ${styles.formControl}`}
                    onChange={handleChange}
                    value={form.phone}
                  />
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label
                    for="description"
                    className={`col-form-label ${styles.labelColor}`}
                  >
                    Store Description
                  </label>
                </div>
                <div className="col-md-9">
                  <textarea
                    name="description"
                    id="description"
                    cols=""
                    rows="3"
                    className={`form-control ${styles.formControl}`}
                    onChange={handleChange}
                    value={form.description}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className={`col-md-4 ${styles.right} flex flex-column`}>
              <div className={styles.containerAvatar}>
              {imgPreview ? (
                <img
                  src={imgPreview}
                  alt="preview"
                  className={styles.chooseImage}
                  for="avatar"
                />
              ) : (
                <img
                  src={
                    user.avatar
                      ? `${process.env.REACT_APP_API_URL}files/${user.avatar}`
                      : profile
                  }
                  alt="profile"
                  className={styles.chooseImage}
                />
              )}
              </div>
              <input
                type="file"
                name="image"
                id="image"
                className="d-none"
                onChange={handleInputFile}
                accept="image/jpeg, image/png, image/jpg"
              />
              <label
                className={`d-block text-center py-3 px-4 border rounded-pill ${styles.labelAvatar}`}
                for="image"
              >
                Select Image
              </label>
            </div>
          </div>
          <Button type="submit" title="Save" myClass="submit" />
        </form>
      </div>
    </>
  );
};

export default Store;
