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
                <button className='Botones' onClick={disminuir}>-</button>
                <h4 className='numero'>{quantity}</h4>
                <button className='Botones' onClick={incrementar}>+</button>
            </div>
            <div className='AddToCard'>
                <button className='botonAdd' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
