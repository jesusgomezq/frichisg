import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: []
})


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart);

    // agregamos un producto al carrito 
    const addItem = (productos, quantity) => {

        if (!isInCart(productos.id)) {
            setCart(prev => [...prev, { ...productos, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    // Removemos un producto del carrito 
    const removeItem = (productosId) => {

        const cartUpdate = cart.filter(produc => produc.id !== productosId)
        setCart(cartUpdate)
    }

    // Limpiamos el carrito 
    const clearCart = () => {

        setCart([])
    }

    const total = () => {
        cart.reduce((total, product) => total + product.price * product.quantity, 0)
    }

    const isInCart = (productosId) => {

        return cart.some(prod => prod.id === productosId)
    }

    return (
        <CartContext.Provider value= {{cart, addItem, removeItem, clearCart, total }}>
            {children}
        </CartContext.Provider>
    )
}
