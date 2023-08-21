import React from 'react'
import './SideBar.css'
import { NavLink, Link } from 'react-router-dom'

export const SideBar = () => {
  return (
    <div className='Categorias'>
      <div className='subCate'>
        <NavLink to={`/category/men's clothing`} className={""}>
          Ropa Hombre
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={`/category/women's clothing`} className={""}>
          Ropa Mujer
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={`/category/electronics`} className={""}>
          Electronica
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={`/category/jewelery`} className={""}>
          Accesorios
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={''} className={''}>
          Guerra
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={""} className={""}>
          Racing
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={""} className={""}>
          Aventura
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={""} className={""}>
          Estrategia
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={""} className={""}>
          Arcade
        </NavLink>
      </div>
      <div className='subCate'>
        <Link to='/'>
          <h3>Frichis'Gaming</h3>
        </Link>
      </div>

    </div>
  )
}
