import React, { useEffect, useState } from 'react'
import { getProductosById} from '../../asynkMock'
import { ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])

    const {itemId} = useParams()

    const valor = parseInt(itemId)

    useEffect(()=>{
        getProductosById(valor)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.log(error);
        })
    }, [valor])

  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...productos}/>
    </div>
  )
}
