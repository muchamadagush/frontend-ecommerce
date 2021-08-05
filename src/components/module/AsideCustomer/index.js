import { Link } from "react-router-dom";
import styles from "./asideCustomer.module.css";
import profile from "../../../assets/images/profile-image.svg";
import jwt from "jwt-decode";

const AsideCustomer = () => {
  const dataUser = jwt(localStorage.getItem('token'))

  return (
    <>
      <aside className={styles.aside}>
        <div className="d-flex">
          {dataUser.avatar ? (
            <img className={styles.imgProfile} src={`${process.env.REACT_APP_API_URL}files/${dataUser.avatar}`} alt="choosedImage" />
          ) : (
            <img className={styles.imgProfile} src={profile} alt="choosedImage" />
          )}
          <div className={styles.detailProfile}>
            <span className={styles.nameProfile}>Mark</span>
            <Link to={""} className={styles.editProfile}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12.6662V16H3.33379L13.1707 6.16308L9.8369 2.82928L0 12.6662Z"
                  fill="#9B9B9B"
                />
                <path
                  d="M15.74 2.33586L13.6642 0.260036C13.3174 -0.0866786 12.7529 -0.0866786 12.4062 0.260036L10.7793 1.88693L14.1131 5.22072L15.74 3.59383C16.0867 3.24711 16.0867 2.68258 15.74 2.33586Z"
                  fill="#9B9B9B"
                />
              </svg>{" "}
              Ubah profile
            </Link>
          </div>
        </div>

        <ul className={styles.menus}>
          <li class="nav-item mb-4">
            <Link
              className={`{nav-link ${styles.toggles}`}
              to={"/user/profile"}
            >
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#456BF3" />
                  <path
                    d="M21.3334 22V20.6667C21.3334 19.9594 21.0525 19.2811 20.5524 18.781C20.0523 18.281 19.374 18 18.6667 18H13.3334C12.6262 18 11.9479 18.281 11.4478 18.781C10.9477 19.2811 10.6667 19.9594 10.6667 20.6667V22"
                    stroke="white"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.9999 15.3333C17.4727 15.3333 18.6666 14.1394 18.6666 12.6667C18.6666 11.1939 17.4727 10 15.9999 10C14.5272 10 13.3333 11.1939 13.3333 12.6667C13.3333 14.1394 14.5272 15.3333 15.9999 15.3333Z"
                    stroke="white"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="ms-3">My account</span>
              </div>
            </Link>
          </li>
          <li class="nav-item mb-4">
            <Link
              className={`{nav-link ${styles.toggles}`}
              to={"/user/address"}
            >
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#F36F45" />
                  <path
                    d="M22 14.6666C22 19.3333 16 23.3333 16 23.3333C16 23.3333 10 19.3333 10 14.6666C10 13.0753 10.6321 11.5492 11.7574 10.424C12.8826 9.29877 14.4087 8.66663 16 8.66663C17.5913 8.66663 19.1174 9.29877 20.2426 10.424C21.3679 11.5492 22 13.0753 22 14.6666Z"
                    stroke="white"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 16.6666C17.1046 16.6666 18 15.7712 18 14.6666C18 13.5621 17.1046 12.6666 16 12.6666C14.8954 12.6666 14 13.5621 14 14.6666C14 15.7712 14.8954 16.6666 16 16.6666Z"
                    stroke="white"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="ms-3">Shipping address</span>
              </div>
            </Link>
          </li>
          <li class="nav-item mb-4">
            <Link
              className={`{nav-link ${styles.toggles}`}
              to={"/user/orders"}
            >
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#F3456F" />
                  <path
                    d="M18.6667 10.6666H20.0001C20.3537 10.6666 20.6928 10.8071 20.9429 11.0572C21.1929 11.3072 21.3334 11.6463 21.3334 12V21.3333C21.3334 21.6869 21.1929 22.0261 20.9429 22.2761C20.6928 22.5262 20.3537 22.6666 20.0001 22.6666H12.0001C11.6465 22.6666 11.3073 22.5262 11.0573 22.2761C10.8072 22.0261 10.6667 21.6869 10.6667 21.3333V12C10.6667 11.6463 10.8072 11.3072 11.0573 11.0572C11.3073 10.8071 11.6465 10.6666 12.0001 10.6666H13.3334"
                    stroke="white"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.9999 9.33337H13.9999C13.6317 9.33337 13.3333 9.63185 13.3333 10V11.3334C13.3333 11.7016 13.6317 12 13.9999 12H17.9999C18.3681 12 18.6666 11.7016 18.6666 11.3334V10C18.6666 9.63185 18.3681 9.33337 17.9999 9.33337Z"
                    stroke="white"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="ms-3">My order</span>
              </div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default AsideCustomer;
