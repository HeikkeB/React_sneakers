import React from 'react'
import Info from './Info'
import axios from 'axios'
import { usePriceCart } from '../hooks/usePriceCart'

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems, priceTotal } = usePriceCart()

  const [isOrderComplete, setIsOrderComplete] = React.useState(false)

  const onClickOrder = async () => {
    axios.post('https://63331bb1573c03ab0b58491b.mockapi.io/orders', cartItems)

    setIsOrderComplete(true)
    setCartItems([])
    await axios.delete('https://63331bb1573c03ab0b58491b.mockapi.io/cart', [])
  }

  return (
    <div className="drawer__overlay">
      <div className="drawer">
        <h2>
          Shopping cart{' '}
          <img
            onClick={onClose}
            className="btnRemove"
            src="/image/btn_remove.svg"
            alt="remove"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((el, index) => (
                <div key={index} className="cartItem">
                  <img
                    className="cartItem__image"
                    src={el.imageUrl}
                    alt="sneakers"
                    width={83}
                    height={70}
                  />
                  <div className="cartItem__info">
                    <p>{el.title}</p>
                    <h3>{el.price} руб.</h3>
                  </div>
                  <img
                    onClick={() => onRemove(el.id)}
                    className="btnRemove"
                    src="/image/btn_remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>

            <ul className="priceList">
              <li className="priceList__string">
                <h3>Итого:</h3>
                <div></div>
                <span>{priceTotal} руб.</span>
              </li>
              <li className="priceList__string">
                <h3>Налог 5%:</h3>
                <div></div>
                <span>{Math.round((priceTotal / 100) * 5)} руб.</span>
              </li>
            </ul>
            <button className="green__btn" onClick={onClickOrder}>
              Оформить заказ
            </button>
          </>
        ) : (
          <Info
            title={isOrderComplete ? 'Order complete' : 'Cart is empty'}
            description={
              isOrderComplete
                ? 'Your order will soon be delivered by courier'
                : 'Add at least one product to place an order'
            }
            textButton="Back to shopping"
            image={
              isOrderComplete
                ? './image/complete_order.png'
                : './image/empty_cart.png'
            }
          />
          /*<div className="cartEmpty">
            <img
              width={120}
              height={120}
              className="cartEmpty__img"
              src={image}
              alt="empty cart"
            />
            <h2 className="cartEmpty_h2">Cart is empty</h2>
            <p className="cartEmpty_p">
              Add at least one product to place an order
            </p>
            <button className="green__btn empty_btn" onClick={onClose}>
              Back to shopping
            </button>
          </div>*/
        )}
      </div>
    </div>
  )
}

export default Drawer
