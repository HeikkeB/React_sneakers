function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="drawer__overlay">
      <div className="drawer">
        <h2>
          Корзина{' '}
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
                <span>21 499 руб.</span>
              </li>
              <li className="priceList__string">
                <h3>Налог 5%:</h3>
                <div></div>
                <span>1074 руб.</span>
              </li>
            </ul>
            <button className="green__btn">Оформить заказ</button>
          </>
        ) : (
          <div className="cartEmpty">
            <img
              width={120}
              height={120}
              className="cartEmpty__img"
              src="./image/empty_cart.png"
              alt="empty cart"
            />
            <h2 className="cartEmpty_h2">Cart is empty</h2>
            <p className="cartEmpty_p">
              Add at least one product to place an order
            </p>
            <button className="green__btn empty_btn" onClick={onClose}>
              Back to shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Drawer
