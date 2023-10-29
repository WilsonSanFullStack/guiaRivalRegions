import React from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="min-h-screen text-center p-5 justify-center items-center pt-40">
      <h1 className="title m-10">Bienvenidos a esta guia</h1>
      <div className="flex-col text-center font-semibold ">
        <p>
          pagina creada por un jugador RYUK SAN perteneciente a la comunidad
          COLOMBIANA guia dedicada a todos los jugadores de habla hispana expero
          esta guia se util para jugadores nuevo y antiguos.
        </p>
        <NavLink to="/home">
          <button className='btn'>Bueno sin mas vamos al grano</button>
        </NavLink>
      </div>
    </div>
  );
};
export default Inicio;
