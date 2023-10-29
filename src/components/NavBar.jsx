import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div >
      <nav className='containerNavBar'>
        <li>Perfil</li>
        <li>Articulos</li>
        <NavLink to="/home">
        <button className="btn-n">Home</button>
      </NavLink>
        <li>Almacen</li>
        <li>Subastas</li>
        <li>Mapa</li>
        <li>Trabajo</li>
        <li>Partido</li>
        <li>Gobierno</li>
        <li>Guerras</li>
      </nav>
    </div>
  )
}

export default NavBar;
