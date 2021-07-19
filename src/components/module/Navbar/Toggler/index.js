import styles from "../navbar.module.css";

const Toggler = ({ children }) => {
  return (
    <>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse bg-white ${styles.marginInMobile}`} id="navbarNav">
        {children}
      </div>
    </>
  )
}

export default Toggler
