import { Link } from 'react-router-dom'
import styles from '../navbar.module.css'

const NavLeft = () => {
  return (
    <>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse bg-white ${styles.marginInMobile} ${styles.isMobile}`} id="navbarNav1">
        <ul
          className={`navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-around align-items-center`}
        >
          <li className="ms-4">
            <Link className={styles.btn} to="/login">
              Login
            </Link>
          </li>
          <li className="ms-4">
            <Link className={styles.btn} to="/register">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavLeft
