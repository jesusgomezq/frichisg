import React, { useEffect, useState } from 'react'
import { getProductos, getProductosByCategory } from '../../asynkMock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
    
    const asyncFunc = categoryId ? getProductosByCategory : getProductos

    asyncFunc(categoryId)
      .then(response => {
        setProductos(response)
      })
      .catch(error => {
        console.log(error);
      })
  }, [categoryId])

  return (
    <div className='title is-1 has-text-centered'>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  )
}
