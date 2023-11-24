import './App.scss'
import styles from './styles/app.module.scss'
import CartIcon from './assets/cart-icon.svg'
import { SearchBar } from './components/SearchBar'
import { Card } from './components/Card'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <section className={styles.top_bar}>
          <h1>Olá usuário</h1>
          <img src={CartIcon} alt="cart icon"/>
        </section>

        <section className={styles.search_bar}>
          <SearchBar />
          <span>Clique em um produto e saiba mais sobre!</span>
        </section>
        
      </div>
      <div className={styles.container_cards}>
        {Array.from(Array(10)).map(item => (
          <Card key={item} />
          ))}
      </div>
    </div>
  )
}

export default App
