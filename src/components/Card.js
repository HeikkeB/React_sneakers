function Card(props) {
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
        src={props.imageUrl}
        alt=""
        width={133}
        height={112}
      />
      <p>{props.title}</p>
      <div className="card__info">
        <div>
          <h3>Цена:</h3>
          <span>{props.price} руб.</span>
        </div>
        <button className="button">
          <img src="/image/plus.svg" alt="plus" width={11} height={11} />
        </button>
      </div>
    </div>
  )
}

export default Card
