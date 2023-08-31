import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: [],
})


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart);

    // agregamos un producto al carrito 
    const addItem = (productos, quantity) => {


        if (!isInCart(productos.id)) {
            setCart(prev => [ ...prev, { ...productos, quantity }])
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
    
    // Funcion para no repetir productos en el carrito 
    const isInCart = (productId) => {
        
        return cart.some(prod => prod.id === productId)
    }
    
    // variable para calcular el total de la compra 
    const total = Number.parseFloat(cart.reduce((acc, product)=> acc + product.price * product.quantity, 0)).toFixed(2)

    // funcion para simplificar el value 
    const value = {
        cart, addItem, removeItem, clearCart, total , isInCart
    }

    return (
        <CartContext.Provider value= {value}>
            {children}
        </CartContext.Provider>
    )
}
