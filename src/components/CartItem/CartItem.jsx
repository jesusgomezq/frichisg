import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'


export const CartItem = ({ id, price, image, title, quantity, total}) => {

  const { removeItem} = useContext(CartContext)

  return (

    <article className='CartItem'>

      <header className='Header'>
        <h2 className='ItemHeader'>
          {title}
        </h2>
      </header>

      <picture>
        <img src={image} alt={title} className='ItemImg' />
      </picture>
      <section>
        <p className='InfoCart'>
          Precio: ${price}
        </p>
      </section>

      <section>
        <h4 className='InfoCart'>Cantidad</h4>
        <h6 className='InfoCart'>
          {quantity}
        </h6>
      </section>

      <section>
        <h4 className='InfoCart'>Subtotal</h4>
        <h6 className='InfoCart'>
          ${price * quantity}
        </h6>
      </section>

      <section>
        <h3 className='InfoCart'>
          Total: ${total}
        </h3>
      </section>
      <section>
        <button className='btn btn-danger ' onClick={() => removeItem(id)}>X</button>
      </section>
    </article>

  )
}
