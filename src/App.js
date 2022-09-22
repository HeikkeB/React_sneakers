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
        <div className="card">
          <img
            src="/image/sneakers/Nike Blazer Mid Suede.jpg"
            alt=""
            width={133}
            height={112}
          />
          <p>Кроссовки Nike Blazer Mid Suede</p>
          <div>
            <h3>Цена:</h3>
            <span>12 999 руб.</span>
          </div>
          <button>
            <img src="/image/plus.svg" alt="plus" width={11} height={11} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
