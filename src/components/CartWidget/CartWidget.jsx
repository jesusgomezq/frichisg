import React from 'react'
import carrito from './assets/carrito-de-compras.png'

export const CartWidget = () => {
  return (
    <div className='Card'>
        <div className='level-item has-text-centered levelCard'>0</div>
        <img src={carrito}  alt="carrito" />
    </div>
  )
}
