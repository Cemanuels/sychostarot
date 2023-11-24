import styles from '../../styles/search-bar.module.scss'
import SearchIcon from '../../assets/search-icon.svg'

export function SearchBar() {
  return (
    <div className={styles.container}>
      <img src={SearchIcon} alt="search icon"/>
      <input type="text" className={styles.input} placeholder='buscar' />
    </div>
  )
}