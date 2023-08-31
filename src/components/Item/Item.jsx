import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({ id, title, image, stock, price }) => {
    return (
        <article className='CardItem'>
            <div className='HeaderItem'>
                <img src={image} alt={title} className='ItemImg' />
            </div>

            <section>
                <div className='Titulo'>
                    <h5 >
                        {title}
                    </h5>
                </div>

                <p className='infoItem'>
                    Disponibles: {stock}
                </p>

                <p className='precioItem'>
                    Precio: ${price}
                </p>
            </section>

            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='OptionDetalle'>
                    <button>Ver detalle</button>
                </Link>
            </footer>

        </article>
    )
}
