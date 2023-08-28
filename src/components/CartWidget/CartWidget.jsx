import React, { useContext } from 'react'
import carrito from './assets/carrito-de-compras.png'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

  const { cart } = useContext(CartContext)

  return (
    <Link to='/cart' className='Card' >
      <span className='Numero'>{cart.length}</span>
      <img className='Carrito_logo' src={carrito} alt="carrito" />
      {/* {isInCart} */}
    </Link>
  )
}
