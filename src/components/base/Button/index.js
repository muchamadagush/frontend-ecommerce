import styles from './button.module.css'

const Button = ({ type, title, myClass, clickAction, ownClass }) => {
  return (
    <button type={type} className={`${styles.button} ${styles[myClass]} ${ownClass}`} onClick={clickAction}>{title}</button>
  )
}

export default Button
