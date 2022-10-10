import React from 'react'
import configContext from '../utils/context'

export const usePriceCart = () => {
  const { cartItems, setCartItems } = React.useContext(configContext)

  const priceTotal = cartItems.reduce((sum, obj) => obj.price + sum, 0)

  return { cartItems, setCartItems, priceTotal }
}
