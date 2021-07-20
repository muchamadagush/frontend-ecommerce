import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <>
        <h5>Please login with your account</h5>

        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <Link class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              Customer
            </Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Seller</Link>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <form class="form" action="../../profile/seller/store.html">
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="email" placeholder="Password" required />
              <a href="../Reset_Password/reset.html">Forgot password?</a>
              <button type="submit" class="submit">Login</button>
            </form>
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
        </div>

        <h5 class="ask">Don't have a Blanja account?<a href="../Register/register.html"> Register</a></h5>
      </>
    )
  }
}
