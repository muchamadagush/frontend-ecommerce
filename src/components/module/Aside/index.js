import { Link } from 'react-router-dom'
import styles from './aside.module.css'
import profile from '../../../assets/images/profile-image.svg'

const Aside = () => {
  return (
    <>
      <aside className={styles.aside}>
        <div className='d-flex'>
          <img className={styles.imgProfile} src={profile} alt="profile" />
          <div className={styles.detailProfile}>
            <span className={styles.nameProfile}>Mark</span>
            <Link to={''} className={styles.editProfile}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12.6662V16H3.33379L13.1707 6.16308L9.8369 2.82928L0 12.6662Z" fill="#9B9B9B" />
                <path
                  d="M15.74 2.33586L13.6642 0.260036C13.3174 -0.0866786 12.7529 -0.0866786 12.4062 0.260036L10.7793 1.88693L14.1131 5.22072L15.74 3.59383C16.0867 3.24711 16.0867 2.68258 15.74 2.33586Z"
                  fill="#9B9B9B" />
              </svg> Ubah profile
            </Link>
          </div>
        </div>

        <ul className={styles.menus}>
          <li class="nav-item mb-4">
            <Link className={`{nav-link dropdown-toggle ${styles.toggles}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#456BF3" />
                  <path d="M10 14L16 9.33337L22 14V21.3334C22 21.687 21.8595 22.0261 21.6095 22.2762C21.3594 22.5262 21.0203 22.6667 20.6667 22.6667H11.3333C10.9797 22.6667 10.6406 22.5262 10.3905 22.2762C10.1405 22.0261 10 21.687 10 21.3334V14Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M14 22.6667V16H18V22.6667" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="ms-3">Store</span>
              </div>
            </Link>
            <ul class="dropdown-menu py-0" aria-labelledby="navbarDropdown">
              <li className="mb-0">
                <Link to={'/seller/store'} class="dropdown-item">Store profle</Link>
              </li>
            </ul>
          </li>
          <li class="nav-item mb-4">
            <Link className={`{nav-link dropdown-toggle ${styles.toggles}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#F36F45" />
                  <path d="M19 14.2666L13 10.8066" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M22 18.6667V13.3333C21.9998 13.0995 21.938 12.8699 21.821 12.6675C21.704 12.465 21.5358 12.2969 21.3333 12.18L16.6667 9.51335C16.464 9.39633 16.234 9.33472 16 9.33472C15.766 9.33472 15.536 9.39633 15.3333 9.51335L10.6667 12.18C10.4642 12.2969 10.296 12.465 10.179 12.6675C10.062 12.8699 10.0002 13.0995 10 13.3333V18.6667C10.0002 18.9005 10.062 19.1301 10.179 19.3326C10.296 19.535 10.4642 19.7031 10.6667 19.82L15.3333 22.4867C15.536 22.6037 15.766 22.6653 16 22.6653C16.234 22.6653 16.464 22.6037 16.6667 22.4867L21.3333 19.82C21.5358 19.7031 21.704 19.535 21.821 19.3326C21.938 19.1301 21.9998 18.9005 22 18.6667Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.1802 12.64L16.0002 16.0067L21.8202 12.64" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 22.72V16" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="ms-3">Product</span>
              </div>
            </Link>
            <ul class="dropdown-menu py-0" aria-labelledby="navbarDropdown">
              <li className="mb-0">
                <Link class="dropdown-item" to={'/seller/products'}>My products</Link>
              </li>
              <li className="mb-0">
                <Link class="dropdown-item" to={'/seller/add-product'}>Selling products</Link>
              </li>
            </ul>
          </li>
          <li class="nav-item mb-4">
            <Link className={`{nav-link dropdown-toggle ${styles.toggles}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#F3456F" />
                  <path d="M14.0002 22.6667C14.3684 22.6667 14.6668 22.3682 14.6668 22C14.6668 21.6319 14.3684 21.3334 14.0002 21.3334C13.632 21.3334 13.3335 21.6319 13.3335 22C13.3335 22.3682 13.632 22.6667 14.0002 22.6667Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.3332 22.6667C21.7014 22.6667 21.9998 22.3682 21.9998 22C21.9998 21.6319 21.7014 21.3334 21.3332 21.3334C20.965 21.3334 20.6665 21.6319 20.6665 22C20.6665 22.3682 20.965 22.6667 21.3332 22.6667Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.6665 8.66663H11.3332L13.1198 17.5933C13.1808 17.9002 13.3478 18.1759 13.5915 18.3722C13.8353 18.5684 14.1403 18.6726 14.4532 18.6666H20.9332C21.246 18.6726 21.551 18.5684 21.7948 18.3722C22.0386 18.1759 22.2055 17.9002 22.2665 17.5933L23.3332 12H11.9998" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="ms-3">Order</span>
              </div>
            </Link>
            <ul class="dropdown-menu py-0" aria-labelledby="navbarDropdown">
              <li className="mb-0">
                <Link class="dropdown-item" to={'/seller/orders'}>My order</Link>
              </li>
              <li className="mb-0">
                <Link class="dropdown-item">Order cancel</Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Aside
