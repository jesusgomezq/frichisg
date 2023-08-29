import React, { useEffect, useState } from 'react'
// import { getProductosById } from '../../asynkMock' 
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { Loader } from '../Loader/Loader'



export const ItemDetailContainer = () => {

    const [producto, setProductos] = useState(null)
    const [loader, setLoader] = useState(true)
    const { itemId } = useParams()

    // const valor = parseInt(itemId)


    useEffect(() => {
        setLoader(true)
       

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productosAdapted = { id: response.id, ...data }
                setProductos(productosAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoader(false)
            }, 1000)
    }, [itemId])



    return (
        <div className='ItemDetailContainer'>
            {loader
                ? <Loader />
                : <ItemDetail {...producto} />
            }
        </div>
    )
}
