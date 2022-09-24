import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <div className="content">
        <div className="titleSearch">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/image/search.svg" alt="Search" width={15} height={15} />
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="content__list">
          <Card />

          <div className="card">
            <img
              className="card__image"
              src="/image/sneakers/Jordan Air Jordan 11.jpg"
              alt=""
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Jordan Air Jordan 11</p>
            <div className="card__info">
              <div>
                <h3>Цена:</h3>
                <span>10 799 руб.</span>
              </div>
              <button className="button">
                <img src="/image/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="card__image"
              src="/image/sneakers/Nike Air Max 270.jpg"
              alt=""
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <div className="card__info">
              <div>
                <h3>Цена:</h3>
                <span>11 999 руб.</span>
              </div>
              <button className="button">
                <img src="/image/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="card__image"
              src="/image/sneakers/Nike Blazer Mid Suede beige.jpg"
              alt=""
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike Blazer Mid Suede beige</p>
            <div className="card__info">
              <div>
                <h3>Цена:</h3>
                <span>8 499 руб.</span>
              </div>
              <button className="button">
                <img src="/image/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="card__image"
              src="/image/sneakers/Puma X Aka Boku Future Rider.jpg"
              alt=""
              width={133}
              height={112}
            />
            <p>Кроссовки Puma X Aka Boku Future Rider</p>
            <div className="card__info">
              <div>
                <h3>Цена:</h3>
                <span>9 999 руб.</span>
              </div>
              <button className="button">
                <img src="/image/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="card__image"
              src="/image/sneakers/Under Armour Curry 8.jpg"
              alt=""
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Under Armour Curry 8</p>
            <div className="card__info">
              <div>
                <h3>Цена:</h3>
                <span>15 999 руб.</span>
              </div>
              <button className="button">
                <img src="/image/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="card__image"
              src="/image/sneakers/Nike LeBron XVIII.jpg"
              alt=""
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike LeBron XVIII</p>
            <div className="card__info">
              <div>
                <h3>Цена:</h3>
                <span>14 499 руб.</span>
              </div>
              <button className="button">
                <img src="/image/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="card__image"
              src="/image/sneakers/Nike Kyrie Flytrap IV.jpg"
              alt=""
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike Kyrie Flytrap IV</p>
            <div className="card__info">
              <div>
                <h3>Цена:</h3>
                <span>14 299 руб.</span>
              </div>
              <button className="button">
                <img src="/image/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="card__image"
              src="/image/sneakers/Nike Kyrie 7.jpg"
              alt=""
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike Kyrie 7</p>
            <div className="card__info">
              <div>
                <h3>Цена:</h3>
                <span>12 999 руб.</span>
              </div>
              <button className="button">
                <img src="/image/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="card__image"
              src="/image/sneakers/Nike KYRIE FLYTRAP II.jpg"
              alt=""
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike KYRIE FLYTRAP II</p>
            <div className="card__info">
              <div>
                <h3>Цена:</h3>
                <span>10 999 руб.</span>
              </div>
              <button className="button">
                <img src="/image/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="card__image"
              src="/image/sneakers/Nike KYRIE FLYTRAP V.jpg"
              alt=""
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike KYRIE FLYTRAP V</p>
            <div className="card__info">
              <div>
                <h3>Цена:</h3>
                <span>14 999 руб.</span>
              </div>
              <button className="button">
                <img src="/image/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="card__image"
              src="/image/sneakers/Nike Lebron XVIII Low.jpg"
              alt=""
              width={133}
              height={112}
            />
            <p>Мужские Кроссовки Nike Lebron XVIII Low</p>
            <div className="card__info">
              <div>
                <h3>Цена:</h3>
                <span>14 899 руб.</span>
              </div>
              <button className="button">
                <img src="/image/plus.svg" alt="plus" width={11} height={11} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
