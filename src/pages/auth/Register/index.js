import { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/base/Input";
import styles from "./register.module.css";
import logo from "../../../assets/images/logo.svg";
import Button from "../../../components/base/Button";
import { register } from "../../../configs/redux/actions/userAction";
import { connect } from "react-redux";
import PropTypes from "prop-types"

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: 1,
      name: "",
      email: "",
      password: "",
      store: null,
      phone: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const history = this.props.history
    const data = this.state

    this.props.register(data, history)
  }

  render() {
    const { name, email, password, store, phone } = this.state
    return (
      <>
        <div className={`container ${styles.register}`}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="bag" />
              <h1>Blanja</h1>
            </Link>
          </div>

          <h5>Please sign up with your account</h5>

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
                onClick={() => this.setState({ ...this.state, role: 2 })}
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
                onClick={() => this.setState({ ...this.state, role: 1 })}
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
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  actionChange={this.onChange}
                  value={name}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  actionChange={this.onChange}
                  value={email}
                  required
                />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  actionChange={this.onChange}
                  value={password}
                  required
                />
                <Button title="Register" myClass="register" />
              </form>
            </div>
            <div
              className="tab-pane fade show active"
              id="pills-seller"
              role="tabpanel"
              aria-labelledby="pills-seller-tab"
            >
              <form className={styles.form} onSubmit={this.onSubmit}>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  actionChange={this.onChange}
                  value={name}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  actionChange={this.onChange}
                  value={email}
                  required
                />
                <Input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone number"
                  actionChange={this.onChange}
                  value={phone}
                  required
                />
                <Input
                  type="text"
                  name="store"
                  id="store"
                  value={store}
                  placeholder="Store name"
                  actionChange={this.onChange}
                  required
                />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  actionChange={this.onChange}
                  value={password}
                  required
                />
                <Button title="Register" myClass="register" />
              </form>
            </div>
          </div>

          <h5 className={styles.ask}>
            Already have a Blanja account?<Link to={"/login"}> Login</Link>
          </h5>
        </div>
      </>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func
}

export default connect(null, { register })(Register);
