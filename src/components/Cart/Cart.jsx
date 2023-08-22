import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'

export const Cart = () => {

    const { cart, clearCart, totalQuantity} = useContext(CartContext)

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
        <div className='Cart'>
            {cart.map(produc => <CartItem key={produc.id} {...produc} />)}
            <button onClick={() => clearCart()} className='Boton'>Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )

}
