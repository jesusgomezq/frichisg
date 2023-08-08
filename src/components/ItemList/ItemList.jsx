import React from 'react'
import { Item } from '../Item/Item'
import "./ItemList.css"

export const ItemList = ({ productos }) => {
  return (
    <div className='ListGroup'>
      {productos.map(produc => <Item key={produc.id} {...produc} />)}
    </div>
  )
}
