import styles from './Card.module.scss'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={props.onClickBtnFavorite}
          src="/image/heart_unliked.svg"
          alt="unliked"
          //width={32}
          //height={32}
        />
      </div>
      <img
        className={styles.card__image}
        src={props.imageUrl}
        alt=""
        width={133}
        height={112}
      />
      <p>{props.title}</p>
      <div className={styles.card__info}>
        <div>
          <h3>Цена:</h3>
          <span>{props.price} руб.</span>
        </div>
        <button className={styles.button} onClick={props.onClickBtnAdd}>
          <img src="/image/plus.svg" alt="plus" width={11} height={11} />
        </button>
      </div>
    </div>
  )
}

export default Card
