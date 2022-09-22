function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="header__left">
          <img width={40} height={40} src="/image/logo_sneakers.png" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header__right">
          <li>
            <img width={18} height={18} src="image/basket.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="image/heart.svg" />
          </li>
          <li>
            <img width={18} height={18} src="image/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        ....
      </div>
    </div>
  )
}

export default App
