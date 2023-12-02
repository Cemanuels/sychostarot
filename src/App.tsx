import './App.scss'
import styles from './styles/app.module.scss'
import CartIcon from './assets/cart-icon.svg'
import { SearchBar } from './components/SearchBar'
import { Card } from './components/Card'
import { useState } from 'react'
import products from 'json/products.json'

function App() {
  const [search, setSearch] = useState<string>('')

  const handleChangeSearch = (value: string) => {
    setSearch(value.toLowerCase())
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <section className={styles.top_bar}>
          <h1>Olá cliente</h1>
          <img src={CartIcon} alt="cart icon"/>
        </section>

        <section className={styles.search_bar}>
          <SearchBar onSubmit={handleChangeSearch} />
          <span>Clique em um produto e saiba mais sobre!</span>
        </section>
        
      </div>
      <div className={styles.container_body}>
        <div className={styles.container_cards}>
          {products.filter(item => search ? item.title.toLowerCase().startsWith(search) : true).map(item => (
            <Card key={item.title} title={item.title} description={item.description} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
