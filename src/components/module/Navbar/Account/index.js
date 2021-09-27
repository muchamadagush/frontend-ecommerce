import styles from '../navbar.module.css'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from '../../../../configs/redux/actions/userAction'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Account = ({ role }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const { avatar, user } = useSelector(state => state.user)

  const logout = (e) => {
    e.preventDefault()
    
    localStorage.clear()
    history.push('/')
  }

  const handleUnuseComponent = (e) => {
    e.preventDefault()
    toast.info('In development stage!', { position: toast.POSITION.TOP_CENTER })
  }

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <li className="nav-item ms-3">
        <Link className="nav-link" onClick={handleUnuseComponent}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
              stroke="#9B9B9B" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9978 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6492 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21"
              stroke="#9B9B9B" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </Link>
      </li>
      <li className="nav-item ms-3">
        <Link className="nav-link" onClick={handleUnuseComponent}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
              stroke="#9B9B9B" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 6L12 13L2 6" stroke="#9B9B9B" stroke-width="2.33333" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </Link>
      </li>
      <li className="nav-item ms-3">
        <div class="dropdown">
          <Link class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img className={styles.profile} src={user.avatar ? `${process.env.REACT_APP_API_URL}files/${user.avatar}` : avatar} alt="profile" />
          </Link>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <Link className="dropdown-item" to={role === 1 ? '/seller/store' : '/user/profile'}>
              Profile
            </Link>
            <Link className="dropdown-item" onClick={logout}>
              Logout
            </Link>
          </ul>
        </div>
      </li>
    </>
  )
}

export default Account
