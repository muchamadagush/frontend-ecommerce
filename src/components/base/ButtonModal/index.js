import styles from './ButtonModal.module.css'

const ButtonModal = ({ ownClass, target, label }) => {
  return (
    <button type="button" className={`${styles.button} ${styles[ownClass]}`} data-bs-toggle="modal" data-bs-target={target}>{label}</button>
  )
}

export default ButtonModal
