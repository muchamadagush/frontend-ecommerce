import Button from "../../../components/base/Button";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import styles from "./login.module.css";
import { login } from "../../../configs/redux/actions/userAction";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      role: 1,
      email: '',
      password: '',
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const history = this.props.history
    const data = this.state

    this.props.login(data, history)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { email, password } = this.state
    return (
      <>
        <div className={`container ${styles.login}`}>
          <div className={styles.logo}>
            <Link href="/">
              <img src={logo} alt="bag" />
              <h1>Blanja</h1>
            </Link>
          </div>

          <h5>Please login with your account</h5>

          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li
              className={`nav-item ${styles.roles} ${styles.customer}`}
              role="presentation"
            >
              <Link
                className={`${styles.role} nav-link`}
                id="pills-customer-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-customer"
                type="button"
                role="tab"
                aria-controls="pills-customer"
                aria-selected="true"
                onClick={() => this.setState({ email: '', password: '', role: 2 })}
              >
                Customer
              </Link>
            </li>
            <li
              className={`nav-item ${styles.roles} ${styles.seller}`}
              role="presentation"
            >
              <Link
                className={`${styles.role} nav-link active`}
                id="pills-seller-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-seller"
                type="button"
                role="tab"
                aria-controls="pills-seller"
                aria-selected="false"
                onClick={() => this.setState({ email: '', password: '', role: 1 })}
              >
                Seller
              </Link>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade"
              id="pills-customer"
              role="tabpanel"
              aria-labelledby="pills-customer-tab"
            >
              <form className={styles.form} onSubmit={this.onSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.onChange}
                  required />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChange}
                  required
                />
                <Link href="../Reset_Password/reset.html">
                  Forgot password?
                </Link>
                <Button title="Login" myClass="login" />
              </form>
            </div>
            <div
              className="tab-pane fade show active"
              id="pills-seller"
              role="tabpanel"
              aria-labelledby="pills-seller-tab"
            >
              <form className={styles.form} onSubmit={this.onSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.onChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChange}
                  required
                />
                <Link href="../Reset_Password/reset.html">
                  Forgot password?
                </Link>
                <Button title="Login" myClass="login" />
              </form>
            </div>
          </div>

          <h5 className={styles.ask}>
            Don't have a Blanja account?<Link to={"/register"}> Register</Link>
          </h5>
        </div>
      </>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
}

export default connect(null, { login })(Login)