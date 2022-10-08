import React from 'react'
import configContext from '../utils/context'

const Info = ({ title, description, image, textButton }) => {
  const { setClickCart } = React.useContext(configContext)

  return (
    <div className="cartEmpty">
      <img
        width={120}
        height={120}
        className="cartEmpty__img"
        src={image}
        alt="empty cart"
      />
      <h2 className="cartEmpty_h2">{title}</h2>
      <p className="cartEmpty_p">{description}</p>
      <button
        className="green__btn empty_btn"
        onClick={() => setClickCart(false)}
      >
        {textButton}
      </button>
    </div>
  )
}

export default Info
