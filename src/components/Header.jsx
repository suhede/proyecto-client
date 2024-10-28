import React from "react";
import { Link } from "react-router-dom";
import Desplegable from "./Desplegable";

function Header() {

  function cerrarSesion() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("password");
    window.location.replace("/login");
  }

  return (
    <header className="header">

    <div className='logo'>
        <span className="span__uno">SH</span>
        <h1>Escuela de Arte <span className="span__dos">contemporáneo</span></h1>
      </div>

      <nav >
        {/* --------------Botones del Inicio y cierre de seccion y nombre de usuario--------------------------------------------- */}
      <div className="sesion">
        {localStorage.getItem("usuario") == null ? (
        <button type="button">
         <Link to={"/login"}> Iniciar Sesión</Link></button>
        ) : (
        <p>{localStorage.getItem("usuario")}</p> )}
        <button type="button" onClick={cerrarSesion}>
       Cerrar Sesión
        </button>
      </div>

      <div className="desplegable">
      <Desplegable/>
      </div>
       
      </nav>

    </header>
  );
}
export default Header;
