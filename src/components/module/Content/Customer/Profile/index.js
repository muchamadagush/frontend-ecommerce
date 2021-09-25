import Button from "../../../../base/Button";
import styles from "./profile.module.css";
import profile from "../../../../../assets/images/profile-image.svg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputCheckbox from "../../../../base/InputCheckbox";
import {
  getUser,
  updateProfile,
} from "../../../../../configs/redux/actions/userAction";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [profiles, setProfiles] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    avatar: "",
    role: "",
    image: [],
    imagePreview: [],
    date: "",
    month: "",
    year: "",
  });

  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    setProfiles({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      gender: user.gender,
      avatar: user.avatar,
      date: user.date,
      month: user.month,
      year: user.year,
    });
  }, [user]);

  const handleChange = (e) => {
    e.preventDefault();
    setProfiles({
      ...profiles,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeFile = (e) => {
    setProfiles({
      ...profiles,
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const dateOfBirth =
      profiles.year + "-" + profiles.month + "-" + profiles.date;

    const data = new FormData();
    data.append("name", profiles.name);
    data.append("email", profiles.email);
    data.append("phone", profiles.phone);
    data.append("gender", profiles.gender);
    data.append("avatar", profiles.image);
    data.append("role", profiles.role);
    data.append("dateOfBirth", dateOfBirth);

    dispatch(updateProfile(data));
  };

  console.log(profiles);
  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <div className={styles.contentBody}>
        <h3 className={styles.title}>My Profile</h3>
        <span className={styles.subTitle}>Manage your profile information</span>
        <hr />

        <form onSubmit={handleSubmitUpdate} enctype="multipart/form-data">
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
                    id="name"
                    name="name"
                    className={`form-control ${styles.formControl}`}
                    value={profiles.name}
                    onChange={handleChange}
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
                    id="email"
                    name="email"
                    className={`form-control ${styles.formControl}`}
                    value={profiles.email}
                    onChange={handleChange}
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
                    id="phone"
                    name="phone"
                    className={`form-control ${styles.formControl}`}
                    value={profiles.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label
                    for="gender"
                    className={`col-form-label ${styles.labelColor}`}
                  >
                    Gender
                  </label>
                </div>
                <div className="col-9">
                  <div className="form-check form-check-inline">
                    <InputCheckbox
                      type="radio"
                      name="gender"
                      value="male"
                      handleChange={handleChange}
                      isChecked={profiles.gender === "male" ? true : false}
                    />
                    <label className={`form-check-label ${styles.labelColor}`}>
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <InputCheckbox
                      type="radio"
                      name="gender"
                      value="female"
                      handleChange={handleChange}
                      isChecked={profiles.gender === "female" ? true : false}
                    />
                    <label className={`form-check-label ${styles.labelColor}`}>
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className={`col-md-3 ${styles.label}`}>
                  <label
                    for="phone"
                    className={`col-form-label ${styles.labelColor}`}
                  >
                    Date of birth
                  </label>
                </div>
                <div className="col-md-9 d-flex justify-content-between">
                  <select
                    className="form-select profile"
                    aria-label="Default select example"
                    name="date"
                    onChange={handleChange}
                  >
                    <option value="01" selected={profiles.date === "01"}>
                      1
                    </option>
                    <option value="02" selected={profiles.date === "02"}>
                      2
                    </option>
                    <option value="03" selected={profiles.date === "03"}>
                      3
                    </option>
                    <option value="04" selected={profiles.date === "04"}>
                      4
                    </option>
                    <option value="05" selected={profiles.date === "05"}>
                      5
                    </option>
                    <option value="06" selected={profiles.date === "06"}>
                      6
                    </option>
                    <option value="07" selected={profiles.date === "07"}>
                      7
                    </option>
                    <option value="08" selected={profiles.date === "08"}>
                      8
                    </option>
                    <option value="09" selected={profiles.date === "09"}>
                      9
                    </option>
                    <option value="10" selected={profiles.date === "10"}>
                      10
                    </option>
                    <option value="11" selected={profiles.date === "11"}>
                      11
                    </option>
                    <option value="12" selected={profiles.date === "12"}>
                      12
                    </option>
                    <option value="13" selected={profiles.date === "13"}>
                      13
                    </option>
                    <option value="14" selected={profiles.date === "14"}>
                      14
                    </option>
                    <option value="15" selected={profiles.date === "15"}>
                      15
                    </option>
                    <option value="16" selected={profiles.date === "16"}>
                      16
                    </option>
                    <option value="17" selected={profiles.date === "17"}>
                      17
                    </option>
                    <option value="18" selected={profiles.date === "18"}>
                      18
                    </option>
                    <option value="19" selected={profiles.date === "19"}>
                      19
                    </option>
                    <option value="20" selected={profiles.date === "20"}>
                      20
                    </option>
                    <option value="21" selected={profiles.date === "21"}>
                      21
                    </option>
                    <option value="22" selected={profiles.date === "22"}>
                      22
                    </option>
                    <option value="23" selected={profiles.date === "23"}>
                      23
                    </option>
                    <option value="24" selected={profiles.date === "24"}>
                      24
                    </option>
                    <option value="25" selected={profiles.date === "25"}>
                      25
                    </option>
                    <option value="26" selected={profiles.date === "26"}>
                      26
                    </option>
                    <option value="27" selected={profiles.date === "27"}>
                      27
                    </option>
                    <option value="28" selected={profiles.date === "28"}>
                      28
                    </option>
                    <option value="29" selected={profiles.date === "29"}>
                      29
                    </option>
                    <option value="30" selected={profiles.date === "30"}>
                      30
                    </option>
                    <option value="31" selected={profiles.date === "31"}>
                      31
                    </option>
                  </select>
                  <select
                    className="form-select profile"
                    aria-label="Default select example"
                    name="month"
                    onChange={handleChange}
                  >
                    <option value="01" selected={profiles.month === "01"}>January</option>
                    <option value="02" selected={profiles.month === "02"}>February</option>
                    <option value="03" selected={profiles.month === "03"}>March</option>
                    <option value="04" selected={profiles.month === "04"}>April</option>
                    <option value="05" selected={profiles.month === "05"}>May</option>
                    <option value="06" selected={profiles.month === "06"}>June</option>
                    <option value="07" selected={profiles.month === "07"}>July</option>
                    <option value="08" selected={profiles.month === "08"}>August</option>
                    <option value="09" selected={profiles.month === "09"}>September</option>
                    <option value="10" selected={profiles.month === "10"}>October</option>
                    <option value="11" selected={profiles.month === "11"}>November</option>
                    <option value="12" selected={profiles.month === "12"}>December</option>
                  </select>
                  <select
                    className="form-select profile"
                    aria-label="Default select example"
                    name="year"
                    onChange={handleChange}>
                    <option value="1980" selected={profiles.year === "1980"}>1980</option>
                    <option value="1981" selected={profiles.year === "1981"}>1981</option>
                    <option value="1982" selected={profiles.year === "1982"}>1982</option>
                    <option value="1983" selected={profiles.year === "1983"}>1983</option>
                    <option value="1984" selected={profiles.year === "1984"}>1984</option>
                    <option value="1985" selected={profiles.year === "1985"}>1985</option>
                    <option value="1986" selected={profiles.year === "1986"}>1986</option>
                    <option value="1987" selected={profiles.year === "1987"}>1987</option>
                    <option value="1988" selected={profiles.year === "1988"}>1988</option>
                    <option value="1989" selected={profiles.year === "1989"}>1989</option>
                    <option value="1990" selected={profiles.year === "1990"}>1990</option>
                    <option value="1991" selected={profiles.year === "1991"}>1991</option>
                    <option value="1992" selected={profiles.year === "1992"}>1992</option>
                    <option value="1993" selected={profiles.year === "1993"}>1993</option>
                    <option value="1994" selected={profiles.year === "1994"}>1994</option>
                    <option value="1995" selected={profiles.year === "1995"}>1995</option>
                    <option value="1996" selected={profiles.year === "1996"}>1996</option>
                    <option value="1997" selected={profiles.year === "1997"}>1997</option>
                    <option value="1998" selected={profiles.year === "1998"}>1998</option>
                    <option value="1999" selected={profiles.year === "1999"}>1999</option>
                    <option value="2000" selected={profiles.year === "2000"}>2000</option>
                    <option value="2001" selected={profiles.year === "2001"}>2001</option>
                    <option value="2002" selected={profiles.year === "2002"}>2002</option>
                    <option value="2003" selected={profiles.year === "2003"}>2003</option>
                    <option value="2004" selected={profiles.year === "2004"}>2004</option>
                    <option value="2005" selected={profiles.year === "2005"}>2005</option>
                    <option value="2006" selected={profiles.year === "2006"}>2006</option>
                    <option value="2007" selected={profiles.year === "2007"}>2007</option>
                    <option value="2008" selected={profiles.year === "2008"}>2008</option>
                    <option value="2009" selected={profiles.year === "2009"}>2009</option>
                    <option value="2010" selected={profiles.year === "2010"}>2010</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={`col-md-4 ${styles.right} flex flex-column`}>
              <div className={styles.containerAvatar}>
                {profiles.imagePreview ? (
                  <img
                    src={profiles.imagePreview}
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
                onChange={handleChangeFile}
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
          <Button myClass="submit" title="Save" />
        </form>
      </div>
    </>
  );
};

export default Profile;
