import React from 'react'
import logo from "./assets/logo.png"
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar" >

                <div className="navbar-brand">
                    <figure className="navbar-item">
                        <img className='Logo' src={logo} alt='logo' />
                    </figure>
                </div>
                <div className='Buscador'>
                    <input className='Buscador_input' type="text" placeholder='Buscador'/>
                </div>
                <div className="Carrito">
                    <div className="navbar-item">
                        <CartWidget />
                    </div>
                </div>

            </nav >
        </ >
    )
}