import React from 'react'
import './SideBar.css'
import { NavLink} from 'react-router-dom'

export const SideBar = () => {
  return (
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
