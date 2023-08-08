import React, { useEffect, useState } from 'react'
import { getProductosById} from '../../asynkMock'
import { ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [productos, setProductos] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductosById(itemId)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.log(error);
        })
    }, [itemId])

  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...productos}/>
    </div>
  )
}
