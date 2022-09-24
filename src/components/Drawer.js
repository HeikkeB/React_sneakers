function Drawer() {
  return (
    <div style={{ display: 'none' }} className="drawer__overlay">
      <div className="drawer">
        <h2>
          Корзина{' '}
          <img className="btnRemove" src="/image/btn_remove.svg" alt="remove" />
        </h2>
        <div className="items">
          <div className="cartItem">
            <img
              className="cartItem__image"
              src="/image/sneakers/Nike Blazer Mid Suede.jpg"
              alt="sneakers"
              width={83}
              height={70}
            />
            <div className="cartItem__info">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <h3>12 999 руб.</h3>
            </div>
            <img
              className="btnRemove"
              src="/image/btn_remove.svg"
              alt="remove"
            />
          </div>
          <div className="cartItem">
            <img
              className="cartItem__image"
              src="/image/sneakers/Nike Blazer Mid Suede.jpg"
              alt="sneakers"
              width={83}
              height={70}
            />
            <div className="cartItem__info">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <h3>12 999 руб.</h3>
            </div>
            <img
              className="btnRemove"
              src="/image/btn_remove.svg"
              alt="remove"
            />
          </div>
        </div>
        <ul className="priceList">
          <li className="priceList__string">
            <h3>Итого:</h3>
            <div></div>
            <span>21 499 руб.</span>
          </li>
          <li className="priceList__string">
            <h3>Налог 5%:</h3>
            <div></div>
            <span>1074 руб.</span>
          </li>
        </ul>
        <button className="green__btn">Оформить заказ</button>
      </div>
    </div>
  )
}

export default Drawer
