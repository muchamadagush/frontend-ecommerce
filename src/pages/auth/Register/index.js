import { Component } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../components/base/Input'
import styles from './register.module.css'
import logo from '../../../assets/images/logo.svg'
import Button from '../../../components/base/Button'

export default class Register extends Component {
  render() {
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
            <li className={`nav-item ${styles.roles} ${styles.customer}`} role="presentation">
              <Link className={`${styles.role} nav-link`} id="pills-customer-tab" data-bs-toggle="pill" data-bs-target="#pills-customer" type="button" role="tab" aria-controls="pills-customer" aria-selected="true">
                Customer
              </Link>
            </li>
            <li className={`nav-item ${styles.roles} ${styles.seller}`} role="presentation">
              <Link className={`${styles.role} nav-link active`} id="pills-seller-tab" data-bs-toggle="pill" data-bs-target="#pills-seller" type="button" role="tab" aria-controls="pills-seller" aria-selected="false">Seller</Link>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade" id="pills-customer" role="tabpanel" aria-labelledby="pills-customer-tab">
              <form className={styles.form}>
                <Input type="text" name="name" id="name" placeholder="Name" required />
                <Input type="email" name="email" id="email" placeholder="Email" required />
                <Input type="password" name="password" id="password" placeholder="Password" required />
                <Button title='Register' myClass='register' />
              </form>
            </div>
            <div className="tab-pane fade show active" id="pills-seller" role="tabpanel" aria-labelledby="pills-seller-tab">
              <form className={styles.form}>
                <Input type="text" name="name" id="name" placeholder="Name" required />
                <Input type="email" name="email" id="email" placeholder="Email" required />
                <Input type="number" name="phone" id="phone" placeholder="Phone number" required />
                <Input type="text" name="store" id="store" placeholder="Store name" required />
                <Input type="password" name="email" id="email" placeholder="Password" required />
                <Button title='Register' myClass='register' />
              </form>
            </div>
          </div>

          <h5 className={styles.ask}>Already have a Blanja account?<Link to={'/login'}> Login</Link></h5>
        </div>
      </>
    )
  }
}
