import React from 'react'
import axios from 'axios'
import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
//import cardArr from './utils/cardArr'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setsearchValue] = React.useState('')
  const [clickCart, setClickCart] = React.useState(false)

  React.useEffect(() => {
    axios
      .get('https://63331bb1573c03ab0b58491b.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
    axios
      .get('https://63331bb1573c03ab0b58491b.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data)
      })
  }, [])

  const addToCart = (item) => {
    axios.post('https://63331bb1573c03ab0b58491b.mockapi.io/cart', item)
    setCartItems((prev) => [...prev, item])
  }

  const removeToCartItem = (id) => {
    //axios.delete(`https://63331bb1573c03ab0b58491b.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onChangeSearchInput = (evt) => {
    setsearchValue(evt.target.value)
  }

  const onClearSearchInput = () => {
    setsearchValue('')
  }

  return (
    <div className="wrapper">
      {clickCart && (
        <Drawer
          items={cartItems}
          onClose={() => setClickCart(false)}
          onRemove={removeToCartItem}
        />
      )}
      <Header onClickCart={() => setClickCart(true)} />

      <div className="content">
        <div className="titleSearch">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : 'Все кроссовки'}
          </h1>
          <div className="search-block">
            <img
              className="search"
              src="/image/search.svg"
              alt="Search"
              width={15}
              height={15}
            />

            <input
              onChange={onChangeSearchInput}
              placeholder="Search..."
              value={searchValue}
            ></input>
            {searchValue && (
              <img
                onClick={onClearSearchInput}
                className="clear"
                src="/image/cross.svg"
                alt="cross"
                width={11}
                height={11}
              />
            )}
          </div>
        </div>

        <div className="content__list">
          {items
            .filter((el) =>
              el.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((el) => (
              <Card
                key={el.title}
                title={el.title}
                price={el.price}
                imageUrl={el.imageUrl}
                handleFavorite={() => console.log('favorite')}
                handleAdd={(item) => addToCart(item)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
