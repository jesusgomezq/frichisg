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

            id, title, price, image
        }

        addItem(productos, quantity)
    }

    return (
        <article className='ItemDetail'>
            <div className='ImgContainer'>
                <img src={image} alt={title} className='DetailImg' />
            </div>
            <div className='HeaderDetail'>
                <h2 className='DetailTitle'>
                    {title}
                </h2>
                <div className='DetailBody'>
                    <p className='DetailCate'>
                        Categoria: {category}
                    </p>
                    <p className='DetailDesc'>
                        Descripcion: {description}
                    </p>
                    <p className='DetailPrice'>
                        Precio: ${price}
                    </p>
                    <p className='ItemDispo'>
                        Cantidad disponible: {stock}
                    </p>
                </div>
                <footer className='ItemFooter'>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='BotonFinalizar' >Finalizar compra</Link>
                        ) : (

                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </div>
        </article>
    )
}
