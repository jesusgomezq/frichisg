import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'


export const CartItem = ({ id, price, image, title, quantity }) => {

  const { removeItem, total } = useContext(CartContext)

  return (

    <article className='CartFinal'>
      <header className='HeaderFinal'>
        <div className='ContenedorFinal'>
          <img src={image} alt={title} className='ItemImgFinal' />
        </div>
      </header>

      <section className='contenedorDetalle'>
        <h6 className='ItemHeaderFianl'>
          {title}
        </h6>
      </section>
      <section>
        <p className='InfoCartFInal'>
          Precio: ${price}
        </p>
        <p className='InfoCartFInal'>
          Cantidad: {quantity}
        </p>
        <p className='InfoCartFInal'>
          Subtotal: ${price * quantity}
        </p>
        <h6>Total a pagar: ${total}</h6>
      </section>
      <section>
        <button className='btn btn-danger ' onClick={() => removeItem(id)}>Eliminar</button>
      </section>
    </article>

  )
}
