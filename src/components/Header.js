function Header() {
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
        <li>
          <img width={18} height={18} src="image/basket.svg" alt="basket" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="image/heart.svg" alt="heart" />
        </li>
        <li>
          <img width={18} height={18} src="image/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  )
}

export default Header
