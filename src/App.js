import React from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Header from './components/Header'
import Drawer from './components/Drawer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom'
import Favorites from './pages/Favorites'
//import cardArr from './utils/cardArr'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorite, setFavorite] = React.useState([])
  const [searchValue, setsearchValue] = React.useState('')
  const [clickCart, setClickCart] = React.useState(false)

  React.useEffect(() => {
    axios
      .get('https://63331bb1573c03ab0b58491b.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })

    axios
      .get('https://63331bb1573c03ab0b58491b.mockapi.io/favorites')
      .then((res) => {
        setFavorite(res.data)
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
    axios.delete(`https://63331bb1573c03ab0b58491b.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onChangeSearchInput = (evt) => {
    setsearchValue(evt.target.value)
  }

  const onClearSearchInput = () => {
    setsearchValue('')
  }

  const onAddFavorite = (item) => {
    axios.post('https://63331bb1573c03ab0b58491b.mockapi.io/favorites', item)
    setFavorite((prev) => [...prev, item])
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

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              onClearSearchInput={onClearSearchInput}
              onAddFavorite={onAddFavorite}
              addToCart={addToCart}
            />
          }
        ></Route>
        <Route
          exact
          path="/favorites"
          element={
            <Favorites
              items={favorite}
              onAddFavorite={onAddFavorite}
              addToCart={addToCart}
            />
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
