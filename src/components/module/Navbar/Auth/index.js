import { Component } from 'react'
import { Link } from "react-router-dom";
import styles from "../navbar.module.css";

import React from 'react'

const Auth = () => {
  return (
    <>
      <li className="ms-4">
        <Link className={styles.btn} to="/login">Login</Link>
      </li>
      <li className="ms-4">
        <Link className={styles.btn} to="/register">Sign Up</Link>
      </li>
    </>
  )
}

export default Auth
