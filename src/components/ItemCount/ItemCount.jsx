import React, { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    // Incrementamos el valor a escoger
    const incrementar = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    // disminuiumos el valor ingresado
    const disminuir = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    return (
        <div className='Contador'>
            <div className='Controles'>
                <button className='Boton' onClick={disminuir}>-</button>
                <h4 className='Numero'>{initial}</h4>
                <button className='Boton' onClick={incrementar}>+</button>
            </div>
            <div>
                <button className='Boton' onClick={() => {onAdd(quantity)}} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
