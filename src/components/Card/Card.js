import styles from './Card.module.scss'
import React from 'react'
import ContentLoader from 'react-content-loader'
import configContext from '../../utils/context'

function Card({
  id,
  handleAdd,
  handleFavorite,
  imageUrl,
  title,
  price,
  isFavorite = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(configContext)
  //const [isAdded, setIsAdded] = React.useState(isItemAdded)

  const handleBtnAdd = () => {
    handleAdd({ id, imageUrl, title, price })
    //setIsAdded(!isAdded)
  }

  const [isLiked, setIsLiked] = React.useState(isFavorite)

  const handleBtnLike = () => {
    handleFavorite({ imageUrl, title, price, id })
    setIsLiked(!isLiked)
  }

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={174}
          height={222}
          viewBox="0 0 174 222"
          backgroundColor="#f3f3f3"
          foregroundColor="#dedede"
        >
          <rect x="10" y="20" rx="10" ry="10" width="150" height="90" />
          <rect x="10" y="126" rx="3" ry="3" width="150" height="15" />
          <rect x="10" y="145" rx="3" ry="3" width="85" height="15" />
          <rect x="10" y="184" rx="8" ry="8" width="80" height="25" />
          <rect x="128" y="175" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              onClick={handleBtnLike}
              src={
                isLiked ? '/image/heart_liked.png' : '/image/heart_unliked.png'
              }
              alt="like"
              width={32}
              height={32}
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
              src={
                isItemAdded(id) ? '/image/btn_checked.svg' : '/image/plus.svg'
              }
              alt="plus"
              width={32}
              height={32}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Card
