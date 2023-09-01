import React, { useContext, useState, useEffect } from 'react'
import { collection, getDocs, query, where, Timestamp, writeBatch, addDoc, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { CartContext } from '../../context/CartContext'
import { CheckoutForm } from '../CheckoutForm/CheckoutForm'
import Swal from 'sweetalert2'
// import { Link } from 'react-router-dom'



export const Checkout = () => {
    const [loader, setLoader] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ nombre, telefono, correo}) => {

        setLoader(true)

        try {
            const objOrder = {
                comprador: {
                    nombre, telefono, correo
                },
                items: cart,
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

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
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

    const redirectToInicio = () => {
        window.location.href = '/';

    }
    useEffect(() => {
        if (!loader && orderId) {
            Swal.fire({
                title: "PEDIDO REALIZADO",
                text: `EL ID DE SU PEDIDO ES : ${orderId}`,
                icon: "success",
                confirmButtonText: "IR AL INICIO",
                customClass: {
                    confirmButton: "button is-success is-rounded"
                },
                onClose: () => {
                    redirectToInicio();
                }
            });
        } else if (loader) {
            Swal.fire({
                title: "GENERANDO ID DE SU PEDIDO",
                text: "ESPERE MIENTRAS SE GENERA SU ID...",
                allowOutsideClick: false,
                customClass: {
                    confirmButton: "button is-success is-rounded"
                },
                onBeforeOpen: () => {
                    Swal.showLoading();
                }
            });
        }
    }, [loader, orderId]);

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}
