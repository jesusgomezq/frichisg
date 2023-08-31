import React from 'react'
import logo from "./assets/and_assets.webp"
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
    return (

        <nav className="navbar" >

            <div className="navbarbrand">
                <Link to='/' className='LogoAdn'>
                    <img className='logo' src={logo} alt='logo' />
                </Link>
            </div>
            <div className='Marca'>
            <span>Adn video Juegos</span>
            </div>
            <div className='Buscador'>
                <input type="text" placeholder='Buscador' />
            </div>

            <div className="Carrito">
                <CartWidget />
            </div>
        </nav >
    )
}