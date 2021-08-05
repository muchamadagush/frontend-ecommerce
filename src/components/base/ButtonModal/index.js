import styles from './ButtonModal.module.css'

const ButtonModal = ({ ownClass, target, label, otherClass }) => {
  return (
    <button type="button" className={`${styles.button} ${styles[ownClass]} ${otherClass}`} data-bs-toggle="modal" data-bs-target={target}>{label}</button>
  )
}

export default ButtonModal
