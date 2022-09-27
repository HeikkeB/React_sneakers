import React from 'react'
import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
//import cardArr from './utils/cardArr'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [clickCart, setClickCart] = React.useState(false)

  React.useEffect(() => {
    fetch('https://63331bb1573c03ab0b58491b.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setItems(res)
      })
  }, [])

  const addToCard = (item) => {
    setCartItems((prev) => [...prev, item])
  }

  return (
    <div className="wrapper">
      {clickCart && (
        <Drawer items={cartItems} onClose={() => setClickCart(false)} />
      )}
      <Header onClickCart={() => setClickCart(true)} />

      <div className="content">
        <div className="titleSearch">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/image/search.svg" alt="Search" width={15} height={15} />
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="content__list">
          {items.map((el) => (
            <Card
              title={el.title}
              price={el.price}
              imageUrl={el.imageUrl}
              handleFavorite={() => console.log('favorite')}
              handleAdd={(item) => addToCard(item)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
