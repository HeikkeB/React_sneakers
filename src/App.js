import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import cardArr from './utils/cardArr'

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <div className="content">
        <div className="titleSearch">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/image/search.svg" alt="Search" width={15} height={15} />
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="content__list">
          {cardArr.map((el) => (
            <Card
              title={el.title}
              price={el.price}
              imageUrl={el.imageUrl}
              onClickBtnAdd={() => console.log('Add Cart')}
              onClickBtnFavorite={() => console.log('Add Favorite')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
