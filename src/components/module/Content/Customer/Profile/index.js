import Button from '../../../../base/Button'
import styles from './profile.module.css'
import profile from '../../../../../assets/images/profile-image.svg'
import { useState, useEffect } from 'react'
import jwt from 'jwt-decode'
import { useDispatch } from 'react-redux'
import InputCheckbox from '../../../../base/InputCheckbox'
import { updateProfile } from '../../../../../configs/redux/actions/userAction'

const Profile = () => {
  const dispatch = useDispatch()

  const [profiles, setProfiles] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    gender: '',
    avatar: '',
    role: '',
    image: [],
    imagePreview: []
  })

  const dataUser = jwt(localStorage.getItem('token'))
  useEffect(() => {
    setProfiles({
      id: dataUser.id,
      name: dataUser.name,
      email: dataUser.email,
      phone: dataUser.phone,
      role: dataUser.role,
      gender: dataUser.gender,
      avatar: dataUser.avatar
    })
  }, [dataUser.name, dataUser.email, dataUser.phone, dataUser.avatar, dataUser.id, dataUser.role, dataUser.gender])

  const handleChange = (e) => {
    e.preventDefault();
    setProfiles({
      ...profiles,
      [e.target.name]: e.target.value,
    });
  }

  const handleChangeFile = (e) => {
    setProfiles({
      ...profiles,
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0])
    })
  }

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const id = profiles.id

    const data = new FormData();
    data.append('name', profiles.name)
    data.append('email', profiles.email)
    data.append('phone', profiles.phone)
    data.append('gender', profiles.gender)
    data.append('avatar', profiles.image)
    data.append('role', profiles.role)

    dispatch(updateProfile(id, data))
      .then(
        (res) => alert(res))
  }

  return (
    <>
      <div className={styles.contentBody}>
        <h3 className={styles.title}>My Profile</h3>
        <span className={styles.subTitle}>Manage your profile information</span>
        <hr />

        <form onSubmit={handleSubmitUpdate} enctype="multipart/form-data">
          <div className="row">
            <div className="col-md-8">
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label for="name" className={`col-form-label ${styles.labelColor}`}>Name</label>
                </div>
                <div className="col-md-9">
                  <input type="text" id="name" name="name" className={`form-control ${styles.formControl}`} value={profiles.name} onChange={handleChange} />
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label for="email" className={`col-form-label ${styles.labelColor}`}>Email</label>
                </div>
                <div className="col-md-9">
                  <input type="email" id="email" name="email" className={`form-control ${styles.formControl}`} value={profiles.email} onChange={handleChange} />
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label for="phone" className={`col-form-label ${styles.labelColor}`}>Phone Number</label>
                </div>
                <div className="col-md-9">
                  <input type="number" id="phone" name="phone" className={`form-control ${styles.formControl}`} value={profiles.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label for="gender" className={`col-form-label ${styles.labelColor}`}>Gender</label>
                </div>
                <div className="col-9">
                  <div className="form-check form-check-inline">
                    <InputCheckbox type="radio" name="gender" value="male" handleChange={handleChange} isChecked={profiles.gender === "male" ? true : false} />
                    <label className={`form-check-label ${styles.labelColor}`}>Laki-laki</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <InputCheckbox type="radio" name="gender" value="female" handleChange={handleChange} isChecked={profiles.gender === "female" ? true : false} />
                    <label className={`form-check-label ${styles.labelColor}`}>Perempuan</label>
                  </div>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label for="phone" className={`col-form-label ${styles.labelColor}`}>Date of birth</label>
                </div>
                <div className="col-9 d-flex">
                  <select className="form-select profile" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <select className="form-select profile" aria-label="Default select example">
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <select className="form-select profile" aria-label="Default select example">
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={`col-md-4 ${styles.right} flex flex-column`}>
              <div className={styles.imagePreview}>
              {profiles.imagePreview ? (
                <img className={styles.chooseImage} src={profiles.imagePreview} alt="choosedImage" />
              ) : profiles.avatar ? (
                <img className={styles.chooseImage} src={`${process.env.REACT_APP_API_URL}files/${profiles.avatar}`} alt="choosedImage" />
              ) : (
                <img className={styles.chooseImage} src={profile} alt="choosedImage" />
              )}
              </div>
              <input
                type="file"
                name="image"
                onChange={handleChangeFile}
                accept="image/jpeg, image/png, image/jpg"
              />
            </div>
          </div>
          <Button myClass="submit" title="Save" />
        </form>
      </div>
    </>
  )
}

export default Profile
