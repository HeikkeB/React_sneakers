import React from 'react'
import Card from '../components/Card/Card'
import configContext from '../utils/context'
import axios from 'axios'

function Orders() {
  const [orders, setOrders] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        'https://63331bb1573c03ab0b58491b.mockapi.io/orders'
      )
      console.log(data)
    }

    fetchData()
  }, [])

  return (
    <div className="content">
      <div className="titleSearch">
        <h1>Orders</h1>
      </div>

      <div className="content__list_favorites">
        {[].map((el) => (
          <Card
            key={el.id}
            //handleFavorite={(item) => onAddFavorite(item)}
            //handleAdd={(item) => addToCart(item)}
            //isFavorite={true}
            {...el}
            //title={el.title}
            //price={el.price}
            //imageUrl={el.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Orders
