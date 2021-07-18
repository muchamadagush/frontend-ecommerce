import { useEffect, useState } from "react"
import axios from "axios";
import { API_URL } from "../../api/index"
import Navbar from "../../components/module/Navbar";
import styles from "./cart.module.css"
import { Link } from "react-router-dom";
import Button from "../../components/base/Button";

const Cart = () => {

  const [carts, setCarts] = useState([])
  const userId = 7

  useEffect(() => {
    axios
      .get(`${API_URL}orders/cart/${userId}`)
      .then((response) => {
        const carts = response.data.data[0]
        setCarts(carts)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const handleSubmit = () => {
    //
  }

  return (
    <>
      <Navbar />

      <div className={`container ${styles.marginTopBody}`}>
          <form onSubmit={handleSubmit}>
            <div class="row">
              <h3 className={styles.titlePage}>My Bag</h3>
              <div className={`col-md-8 ${styles.left}`}>
                <div className={styles.allItems}>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Select all items <span>(2 items selected)</span>
                    </label>
                  </div>
                  <Link className={styles.delete}>Delete</Link>
                </div>

                {carts && carts.map((item, index) => (
                <div className={styles.item} key={index}>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                  <div className={styles.blockImage}>
                  <img className={styles.imgProduct} src={item.image} alt="" />
                  </div>
                  <div class={styles.detail}>
                    <h5>{item.title}</h5>
                    <span>Zalora Cloth</span>
                  </div>
                  <div className={styles.count}>
                    <span>
                      <svg className={styles.buttonCount} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#D4D4D4" />
                        <rect x="11" y="17" width="14" height="2" fill="white" />
                      </svg>
                    </span>
                    <span className="mx-2">{item.qty}</span>
                    <span>
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

                  <p>$ {item.price * item.qty}</p>
                </div>
                ))}
              </div>
              <div class={`col-md-4 ${styles.right}`}>
                <h5>Shopping summary</h5>
                <div class={styles.subTotal}>
                  <span>Total price</span>
                  <span className={styles.price}>$ 40.0</span>
                </div>
                <Button
                  type="submit"
                  myClass="buy"
                  title="Buy"
                />
              </div>
            </div>
          </form>
      </div>
    </>
  )
}

export default Cart
