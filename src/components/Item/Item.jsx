import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({ id, name, image, stock, price }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='info'>
                    Stock disponible: {stock}
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
