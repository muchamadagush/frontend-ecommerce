import styles from './button.module.css'

const Button = ({ type, title, myClass, clickAction }) => {
  return (
    <button type={type} className={`${styles.button} ${styles[myClass]}`} onClick={clickAction}>{title}</button>
  )
}

export default Button
