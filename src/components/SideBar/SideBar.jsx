import React from 'react'
import './SideBar.css'
import { NavLink} from 'react-router-dom'

export const SideBar = () => {
  return (
    <div className='Categorias'>
      <div className='subCate'>
        <NavLink to={`/category/men's clothing`} className="Ancla">
          Ropa Hombre
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={`/category/women's clothing`} className="Ancla">
          Ropa Mujer
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={`/category/electronics`} className="Ancla">
          Electronica
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={`/category/jewelery`} className="Ancla">
          Accesorios
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={''} className="Ancla">
          Guerra
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={""} className="Ancla">
          Racing
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={""} className="Ancla">
          Aventura
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={""} className="Ancla">
          Estrategia
        </NavLink>
      </div>
      <div className='subCate'>
        <NavLink to={""} className="Ancla">
          Arcade
        </NavLink>
      </div>

    </div>
  )
}
