import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { Loader } from '../Loader/Loader'






export const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  const [loader, setLoader] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoader(true)



    const collectionRef = categoryId
      ? query(collection(db, 'productos'), where('category', '==', categoryId))
      : collection(db, 'productos')

    getDocs(collectionRef)
      .then(response => {
        const productosAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })

        setProductos(productosAdapted)
      })

      .catch(error => {
        console.log(error);
      })

      .finally(() => {
        setLoader(false)
      }, 1000)

  }, [categoryId])

  return (
    <div className='title is-1 has-text-centered Container'>
      <h1>{greeting}</h1>
      {loader
        ? <Loader />
        :(<ItemList productos={productos} />) 
      }
    </div>
  )
}
