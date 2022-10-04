import Card from '../components/Card/Card'

function Favorites({ items, onAddFavorite, addToCart }) {
  return (
    <div className="content">
      <div className="titleSearch">
        <h1>Favorites</h1>
      </div>

      <div className="content__list_favorites">
        {items.map((el) => (
          <Card
            key={el.title}
            title={el.title}
            price={el.price}
            imageUrl={el.imageUrl}
            handleFavorite={(item) => onAddFavorite(item)}
            handleAdd={(item) => addToCart(item)}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
