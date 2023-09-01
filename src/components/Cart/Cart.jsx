import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'

export const Cart = () => {

    const { cart, clearCart, totalQuantity} = useContext(CartContext)
    
    // condicion para cuando no hayan productos en el carrito 
    if (totalQuantity === 0) {
        return (
            <div>
                <h1>
                    No hay juegos seleccionados
                </h1>
                <Link to='/' className='Option' > Juegos</Link>
            </div>
        )
    }

    return (
        <div className='CartVew'>
            {cart.map(produc => <CartItem key={produc.id} {...produc} />)}
            <div className='contenedorBotones'>
                <div className='LimpiarCarrito'>
                <button onClick={() => clearCart()} className='CartFooter'>Limpiar carrito</button>
                </div>
                <div className='BotonChek'>
                <Link className='Check' to='/checkout'>Checkout</Link>
                </div>
            </div>
        </div>
    )

}
