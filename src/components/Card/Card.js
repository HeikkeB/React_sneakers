import styles from './Card.module.scss'
import React from 'react'

function Card({
  id,
  handleAdd,
  handleFavorite,
  imageUrl,
  title,
  price,
  isFavorite = false,
  isLikedCart = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false)

  const handleBtnAdd = () => {
    handleAdd({ imageUrl, title, price })
    setIsAdded(!isAdded)
  }

  const [isLiked, setIsLiked] = React.useState(isFavorite)

  const handleBtnLike = () => {
    handleFavorite({ imageUrl, title, price, id })
    setIsLiked(!isLiked)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={handleBtnLike}
          src={isLiked ? '/image/heart_liked.svg' : '/image/heart_unliked.svg'}
          alt="unliked"
          //width={32}
          //height={32}
        />
      </div>
      <img
        className={styles.card__image}
        src={imageUrl}
        alt=""
        width={133}
        height={112}
      />
      <p>{title}</p>
      <div className={styles.card__info}>
        <div>
          <h3>Цена:</h3>
          <span>{price} руб.</span>
        </div>

        <img
          className={styles.button_plus}
          onClick={handleBtnAdd}
          src={isAdded ? '/image/btn_checked.svg' : '/image/plus.svg'}
          alt="plus"
          width={32}
          height={32}
        />
      </div>
    </div>
  )
}

export default Card
