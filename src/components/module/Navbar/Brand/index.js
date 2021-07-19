import { Component } from 'react'
import logo from "../../../../assets/images/logo.svg"
import styles from "../navbar.module.css";
import { Link } from "react-router-dom";

export default class Brand extends Component {
  render() {
    return (
      <>
        <Link className={styles.navbarBrand} to="/">
          <img src={logo} alt="Blanja" />
          <span className={styles.title}> Blanja</span>
        </Link>
      </>
    )
  }
}
