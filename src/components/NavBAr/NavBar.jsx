import React from 'react'
import logo from "./assets/logo.png"
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar is-dark level-item has-text-centered" role="navigation" aria-label="main navigation">

                <div className="navbar-brand">
                    <figure className="navbar-item" href="https://bulma.io">
                        <img src={logo} width="40" height="" alt='logo' />
                        <Link to='/'>
                            <h3>Frichis'Gaming</h3>
                        </Link>
                    </figure>
                </div>

                <div id="navbarBasicExample" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                    <div className="navbar-end">
                        <NavLink to={`/category/men's clothing`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                            Ropa de caballeros
                        </NavLink>

                        <NavLink to={`/category/women's clothing`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
                            Ropa de damas
                        </NavLink>

                        <NavLink to={`/category/electronics`} className="navbar-item">
                            Electronica
                        </NavLink>

                        <NavLink to={`/category/jewelery`} className="navbar-item">
                            Accesorios
                        </NavLink>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <CartWidget />
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}