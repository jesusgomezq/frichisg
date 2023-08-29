import React, { useContext, useState } from 'react'
import { collection, getDocs, query, where, Timestamp, writeBatch, addDoc, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { CartContext } from '../../context/CartContext'
import { CheckoutForm } from '../CheckoutForm/CheckoutForm'

export const Checkout = () => {
    const [loader, setLoader] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ nombre, telefono, correo }) => {

        setLoader(true)

        try {
            const objOrder = {
                comprador: {
                    nombre, telefono, correo
                },
                itams: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'productos')
            const productAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.i === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }

            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()

            } else {
                console.error('Productos fuera de estock')
            }
        }
        catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
    }



    if (loader) {
        return <h1>Se esta generando su compra</h1>
    }

    if (orderId) {
        return <h1>Su oreden es: {orderId}</h1>
    }
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}
