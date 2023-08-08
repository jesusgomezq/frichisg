import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import "./ItemDetail.css"

export const ItemDetail = ({id,image, title, category, description, price, stock}) => {
  return (
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {title}
            </h2>
        </header>
        <picture>
            <img src={image} alt={title} className='ItemImg' />
        </picture>
        <section>
            <p className='Info'>
                Categoria: {category}
            </p>
            <p className='Info'>
                Descripcion: {description}
            </p>
            <p className='Info'>
                Precio: ${price} 
            </p>
            <p>
                Cantidad disponible: {stock}
            </p>
        </section>
        <footer className='ItemFooter'>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada:', quantity)}/> 
        </footer>

    </article>
  )
}
