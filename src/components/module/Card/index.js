import styles from './card.module.css'
import star from '../../../assets/images/Star.svg'

const index = ({ image, title, price, store, myClass, pClass}) => {
  return (
    <>
      <div className="card card-md-5">
        <div className={styles.images}>
          <img src={image} className={styles.image} alt="" />
        </div>
        <div className={`card-body  ${myClass}`}>
          <p className={`${styles.title} ${pClass}`}>{title}</p>
          <ul className={styles.list}>
            <li className={styles.price}>{price}</li>
            <li className={styles.store}>{store}</li>
            <li className={styles.rating}>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              (10)
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default index
