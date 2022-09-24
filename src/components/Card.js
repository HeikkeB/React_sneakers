function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img
          src="/image/heart_unliked.svg"
          alt="unliked"
          //width={32}
          //height={32}
        />
      </div>
      <img
        className="card__image"
        src="/image/sneakers/Nike Blazer Mid Suede.jpg"
        alt=""
        width={133}
        height={112}
      />
      <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
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
  )
}

export default Card
