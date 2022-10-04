import { Link } from 'react-router-dom'
function Header(props) {
  return (
    <header>
      <div className="header__left">
        <img width={40} height={40} src="/image/logo_sneakers.png" alt="logo" />
        <div>
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="header__right">
        <li onClick={props.onClickCart}>
          <img width={18} height={18} src="image/basket.svg" alt="basket" />
          <span>1205 руб.</span>
        </li>
        <li>
          <Link exact="true" to="/favorites">
            <img width={18} height={18} src="image/heart.svg" alt="heart" />
          </Link>
        </li>
        <li>
          <Link exact="true" to="/">
            <img width={18} height={18} src="image/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
