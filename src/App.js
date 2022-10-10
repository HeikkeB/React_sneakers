import React from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites'
import configContext from './utils/context'
import Orders from './pages/Orders'
//import cardArr from './utils/cardArr'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorite, setFavorite] = React.useState([])
  const [searchValue, setsearchValue] = React.useState('')
  const [clickCart, setClickCart] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const favoriteResponse = await axios.get(
        'https://63331bb1573c03ab0b58491b.mockapi.io/favorites'
      )

      const cartResponse = await axios.get(
        'https://63331bb1573c03ab0b58491b.mockapi.io/cart'
      )

      const itemsResponse = await axios.get(
        'https://63331bb1573c03ab0b58491b.mockapi.io/items'
      )

      setIsLoading(false)

      setFavorite(favoriteResponse.data)
      setCartItems(cartResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData()
  }, [])

  const addToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) == Number(obj.id))) {
        axios.delete(
          `https://63331bb1573c03ab0b58491b.mockapi.io/cart/${obj.id}`
        )
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) != Number(obj.id))
        )
      } else {
        axios.post('https://63331bb1573c03ab0b58491b.mockapi.io/cart', obj)
        setCartItems((prev) => [...prev, obj])
      }
    } catch (err) {
      console.log(err)
    }
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

  const onAddFavorite = async (item) => {
    try {
      if (favorite.find((favItem) => favItem.id === item.id)) {
        axios.delete(
          `https://63331bb1573c03ab0b58491b.mockapi.io/favorites/${item.id}`
        )
        setFavorite((prev) => prev.filter((favItem) => favItem.id !== item.id))
      } else {
        const { data } = await axios.post(
          'https://63331bb1573c03ab0b58491b.mockapi.io/favorites',
          item
        )
        setFavorite((prev) => [...prev, data])
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <configContext.Provider
      value={{ items, cartItems, favorite, setClickCart, setCartItems }}
    >
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
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                onClearSearchInput={onClearSearchInput}
                onAddFavorite={onAddFavorite}
                addToCart={addToCart}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route
            exact
            path="/favorites"
            element={
              <Favorites onAddFavorite={onAddFavorite} addToCart={addToCart} />
            }
          ></Route>

          <Route exact path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </configContext.Provider>
  )
}

export default App
