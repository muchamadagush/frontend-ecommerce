import styles from "../navbar.module.css";

const index = ({children}) => {
  return (
    <>
      <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row justify-content-around align-items-center ${styles.marginInMobile}`}>
        {children}
      </ul>
    </>
  )
}

export default index
