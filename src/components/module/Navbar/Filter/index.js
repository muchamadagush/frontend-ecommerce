import search from "../../../../assets/images/Search.svg"
import Input from "../../../base/Input";
import styles from "../navbar.module.css";

const Filter = ({ handleInputSearch, handleSearch }) => {
  return (
    <>
      <div className={`d-flex flex-row align-items-center ${styles.navItem}`}>
        <div className={styles.searchGroup}>
          <Input type={'text'} name={'search'} id={'search'} placeholder={'search...'} myClass={'search'} actionChange={handleInputSearch} />
          <img className={styles.search} src={search} alt="Search" onClick={handleSearch} />
        </div>
        <button className={styles.filter}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 13C1 6.37258 6.37258 1 13 1H29C35.6274 1 41 6.37258 41 13V29C41 35.6274 35.6274 41 29 41H13C6.37258 41 1 35.6274 1 29V13Z" fill="white" stroke="#8E8E93" />
            <path d="M29.3332 13.5H12.6665L19.3332 21.3833V26.8333L22.6665 28.5V21.3833L29.3332 13.5Z" stroke="#8E8E93" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default Filter
