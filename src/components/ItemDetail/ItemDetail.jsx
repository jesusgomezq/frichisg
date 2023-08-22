import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const ItemDetail = ({ id, image, title, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const productos = {
            id, title, price
        }

        addItem(productos, quantity)
    }

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
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option' >Finalizar compra</Link>
                    ) : (

                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}
