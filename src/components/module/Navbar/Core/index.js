import styles from "../navbar.module.css";

const Navbar = ({ children }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${styles.navbar}`}
    >
      <div className="container">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
