import Card from '../components/Card/Card'
import React from 'react'
import configContext from '../utils/context'

function Home({
  searchValue,
  onChangeSearchInput,
  onClearSearchInput,
  onAddFavorite,
  addToCart,
  isLoading,
}) {
  const { items, cartItems } = React.useContext(configContext)

  const renderItems = () => {
    const itemsRender = items.filter((el) =>
      el.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (
      isLoading ? Array(12).fill(<Card loading={isLoading} />) : itemsRender
    ).map((el, index) => (
      <Card
        key={index}
        title={el.title}
        price={el.price}
        imageUrl={el.imageUrl}
        handleFavorite={(item) => onAddFavorite(item)}
        handleAdd={(obj) => addToCart(obj)}
        isLikedCart={cartItems.some((obj) => obj.id === el.id)}
        loading={isLoading}
      />
    ))
  }

  return (
    <>
      <div className="banner">
        <div>
          <img
            className="banner__logo"
            src="./image/banner_logo.png"
            alt="logo"
            width={99}
            height={40}
          />
          <h3 className="banner__title">Stan Smith,</h3>
          <p className="banner__p">Forever!</p>
        </div>
        <img
          className="banner__kermit"
          src="./image/banner_kermit.png"
          width={641}
          height={300}
        />
      </div>

      <div className="content">
        <div className="titleSearch">
          <h1>
            {searchValue
              ? `Search on the request: "${searchValue}"`
              : 'All Items'}
          </h1>
          <div className="search-block">
            <img
              className="search"
              src="/image/search.svg"
              alt="Search"
              width={15}
              height={15}
            />

            <input
              onChange={onChangeSearchInput}
              placeholder="Search..."
              value={searchValue}
            ></input>
            {searchValue && (
              <img
                onClick={onClearSearchInput}
                className="clear"
                src="/image/cross.svg"
                alt="cross"
                width={11}
                height={11}
              />
            )}
          </div>
        </div>

        <div className="content__list">{renderItems()}</div>
      </div>
    </>
  )
}

export default Home
