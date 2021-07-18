import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import search from "../../../assets/images/Search.svg"
import logo from "../../../assets/images/logo.svg"
import Input from "../../base/Input";


const Navbar = ({handleInputSearch, handleSearch}) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${styles.navbar}`}>
      <div className="container">
        <Link className={styles.navbarBrand} to="/">
          <img src={logo} alt="Blanja" />
          <span className={styles.title}> Blanja</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse bg-white ${styles.marginInMobile}`} id="navbarNav">
          <div className={`d-flex flex-row align-items-center ${styles.navItem}`}>
            <div className={styles.searchGroup}>
              <Input type={'text'} name={'search'} id={'search'} placeholder={'search...'} myClass={'search'} actionChange={handleInputSearch} />
              <img className={styles.search} src={search} alt="Search" onClick={handleSearch} />
            </div>
            <button className={styles.filter}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 13C1 6.37258 6.37258 1 13 1H29C35.6274 1 41 6.37258 41 13V29C41 35.6274 35.6274 41 29 41H13C6.37258 41 1 35.6274 1 29V13Z" fill="white" stroke="#8E8E93" />
                <path d="M29.3332 13.5H12.6665L19.3332 21.3833V26.8333L22.6665 28.5V21.3833L29.3332 13.5Z" stroke="#8E8E93" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row justify-content-around align-items-center ${styles.marginInMobile}`}>
            <li>
              <Link className="cart" to="/cart">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path
                      d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                      stroke="#9B9B9B" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                      stroke="#9B9B9B" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                      stroke="#9B9B9B" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li className="ms-4">
              <Link className={styles.btn} to="/login">Login</Link>
            </li>
            <li className="ms-4">
              <Link className={styles.btn} to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
