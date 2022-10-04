import Card from '../components/Card/Card'

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onClearSearchInput,
  onAddFavorite,
  addToCart,
}) {
  return (
    <div className="content">
      <div className="titleSearch">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
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

      <div className="content__list">
        {items
          .filter((el) =>
            el.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((el) => (
            <Card
              key={el.title}
              title={el.title}
              price={el.price}
              imageUrl={el.imageUrl}
              handleFavorite={(item) => onAddFavorite(item)}
              handleAdd={(item) => addToCart(item)}
              //isLikedCart={true}
            />
          ))}
      </div>
    </div>
  )
}

export default Home
