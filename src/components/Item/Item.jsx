import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({ id, title, image, stock, price }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h3 className='ItemHeader'>
                    {title}
                </h3>
            </header>
            <picture>
                <img src={image}  alt={title} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Precio ${price}
                </p>
                <p className='info'>
                    Disponibles: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>
                    <button>Ver detalle</button>
                </Link>
            </footer>

        </article>
    )
}
