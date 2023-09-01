import React from 'react'
import logo from "./assets/and_assets.webp"
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
    return (

        <nav className="navbar" >

            <div className="navbarbrand">
                <Link to='/' className='LogoAdn'>
                    <img className='logo' src={logo} alt='logo' />
                </Link>
                <span className='Marca'>Adn video Juegos</span>
            </div>

            <div className='Buscador'>
                <input type="text" placeholder='Buscador' className='InputBuscador' />
            </div>

            <div className='Categorias'>
                <div className='subCate'>
                    <NavLink to={`/category/disparo`} className="Ancla">
                        Disparo
                    </NavLink>
                </div>
                <div className='subCate'>
                    <NavLink to={`/category/carreras`} className="Ancla">
                        Carrera
                    </NavLink>
                </div>
                <div className='subCate'>
                    <NavLink to={`/category/deportes`} className="Ancla">
                        Deportes
                    </NavLink>
                </div>
                <div className='subCate'>
                    <NavLink to={`/category/aventura`} className="Ancla">
                        Aventura
                    </NavLink>
                </div>
            </div>

            <div className="Carrito">
                <CartWidget />
            </div>
        </nav >
    )
}