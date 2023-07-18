import React from 'react'
import logo from "./assets/logo.png"
import { CartWidget } from '../CartWidget/CartWidget'


export const NavBar = () => {
    return (
        <div>
            <nav className="navbar is-dark level-item has-text-centered" role="navigation" aria-label="main navigation">

                <div className="navbar-brand">
                    <figure className="navbar-item" href="https://bulma.io">
                        <img src={logo} width="40" height="" alt='logo' />
                        <div >
                            Frichis'Gaming
                        </div>
                    </figure>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item">
                            Inicio
                        </a>

                        <a className="navbar-item">
                            Juegos
                        </a>

                        <a className="navbar-item">
                            Tienda
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <CartWidget/>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}