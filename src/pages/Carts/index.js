import { useEffect } from "react"
import styles from "./cart.module.css"
import { useHistory } from "react-router-dom";
import Button from "../../components/base/Button";
import Nav from "../../components/module/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrderDetails, fetchOrders, updateQtyOrder } from "../../configs/redux/actions/orderAction";
import jwt from "jwt-decode";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Carts = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = jwt(localStorage.getItem('token'))
  const userId = user.id
  let selected = []

  useEffect(() => {
    dispatch(fetchOrders(userId))
  }, [dispatch, userId])

  const { orders, orderdetails } = useSelector(state => state.orders)

  const handleQtyPlus = (id, qty) => {
    const data = {
      qty: qty + 1
    }
    dispatch(updateQtyOrder(id, data))
      .then((res) => dispatch(fetchOrders(userId)))
  }

  const handleQtyMinus = (params) => {
    if (params) {
      const data = {
        qty: params.qty - 1
      }
      dispatch(updateQtyOrder(params.id, data))
        .then(() => dispatch(fetchOrders(userId)))
    }
  }

  const handleSubmit = () => {
    history.push('/checkout')
  }

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const handleSelected = (id) => {
    if (selected.indexOf(id) === -1) {
      selected.push(id)
    } else {
      removeItemOnce(selected, id);
    }
  }

  const handleDeleteOrderDetails = () => {
    dispatch(deleteOrderDetails(selected))
      .then(() => dispatch(fetchOrders(userId)))
  }

  const confirm = () => {
    confirmAlert({
      title: 'Are you sure?',
      message: 'You want to delete this product?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDeleteOrderDetails()
        },
        {
          label: 'No',
          onClick: () => toast.error('Canceled!', { position: toast.POSITION.TOP_CENTER })
        }
      ]
    });
  }

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <Nav />

      <div className={`container ${styles.marginTopBody}`}>
        <form onSubmit={handleSubmit}>
          <div class="row">
            <h3 className={styles.titlePage}>My Bag</h3>
            <div className={`col-md-8 ${styles.left}`}>
              <div className={styles.allItems}>
                <div class="form-check">
                  <input class="form-check-input cart" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    Select all items
                  </label>
                </div>
                <button type="button" className={styles.delete} onClick={confirm}>Delete</button>
              </div>

              {orderdetails && orderdetails.map((item, index) => (
                <div className={styles.item} key={index}>
                  <div class="form-check">
                    <input class="form-check-input cart" type="checkbox" value={item.id} id="flexCheckDefault" onClick={() => handleSelected(item.id)} defaultChecked={selected.includes(item.id_order) ? true : false} />
                  </div>
                  <div className={styles.blockImage}>
                    <img className={styles.imgProduct} src={`${process.env.REACT_APP_API_URL}files/${item.image[0]}`} alt="" />
                  </div>
                  <div class={styles.detail}>
                    <h5>{item.title}</h5>
                    <span>Zalora Cloth</span>
                  </div>
                  <div className={styles.count}>
                    <span onClick={() => handleQtyMinus(item.qty > 1 ? ({id: item.id, qty: item.qty}) : '')}>
                      <svg className={styles.buttonCount} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#D4D4D4" />
                        <rect x="11" y="17" width="14" height="2" fill="white" />
                      </svg>
                    </span>
                    <span className="mx-2">{item.qty}</span>
                    <span onClick={() => handleQtyPlus(item.id, item.qty)}>
                      <svg className={styles.buttonCount} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                          <circle cx="22" cy="22" r="18" fill="white" />
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 15V21H15V23H21V29H23V23H29V21H23V15H21Z" fill="#222222" />
                        <defs>
                          <filter id="filter0_d" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0 0.558333 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                  </div>

                  <p>Rp {item.price * item.qty}</p>
                </div>
              ))}
            </div>
            {orders && orders.map((item, index) => (
              <div class={`col-md-4 ${styles.right}`} key={index}>
                <h5>Shopping summary</h5>
                <div class={styles.subTotal}>
                  <span>Total price</span>
                  <span className={styles.price}>Rp {item.subTotal}</span>
                </div>
                <Button
                  type="submit"
                  myClass="buy"
                  title="Buy"
                />
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  )
}

export default Carts
