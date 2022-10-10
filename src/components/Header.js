import React from 'react'
import { Link } from 'react-router-dom'
import { usePriceCart } from '../hooks/usePriceCart'
function Header(props) {
  const { priceTotal } = usePriceCart()

  return (
    <header>
      <div className="header__left">
        <img width={40} height={40} src="/image/logo_sneakers.png" alt="logo" />
        <div>
          <h3>REACT SNEAKERS</h3>
          <p>sneakers shop</p>
        </div>
      </div>

      <ul className="header__right">
        <li>
          <Link exact="true" to="/">
            <img width={19.5} height={18} src="image/home.svg" alt="home" />
          </Link>
        </li>

        <li>
          <Link exact="true" to="/orders">
            <img width={18} height={18} src="image/user.svg" alt="user" />
          </Link>
        </li>

        <li>
          <Link exact="true" to="/favorites">
            <img
              className="header__heart_img"
              width={18}
              height={18}
              src="image/heart.svg"
              alt="heart"
            />
          </Link>
        </li>
        <li onClick={props.onClickCart}>
          <img
            width={18}
            height={18}
            src="image/shopping_bag.svg"
            alt="basket"
          />
          <span>{priceTotal} руб.</span>
        </li>
      </ul>
    </header>
  )
}

export default Header
