import React from "react";

{
  /* -----------------FUNCIONALIDAD DEL CREAR DEL CRUD DE LA BASE DE DATOS--- 
  PARA ENVIAR DE LOS DATOS SE USAN LOS ATRIBUTOS 'ACTION', Y 'METHOD' EN EL FORMULARIO------------ */
}
function Crear() {
  const { VITE_API_LISTA } = import.meta.env;

  return (
    <>
      {/* -----------------FORMULARIO------------ */}

      <div className="crear__contenedor">
        <h2 className="crear__h2">
          {" "}
          Añadir nuevo curso de formación a la lista
        </h2>
        <form action={VITE_API_LISTA} method="post" className="form">
          <label htmlFor="nom">Nombre: </label>
          <input type="text" 
          name="nombre" 
          id="nom" 
          className="input__crear" />

          <label htmlFor="desc">Descripcion: </label>
          <input
            type="text"
            name="descripcion"
            id="desc"
            className="input__crear"
          />

          <label htmlFor="por">Tutor: </label>
          <input 
          type="text" 
          name="tutor" 
          id="por" 
          className="input__crear" />

          <label htmlFor="time">Duración: </label>
          <input
            type="text"
            name="duracion"
            id="time"
            className="input__crear"
          />

          <label htmlFor="img">Ruta/Imagen</label>
          <input 
          type="text" 
          name="imagen" 
          id="img" 
          className="input__crear" />

          <label htmlFor="pre">Precio: </label>
          <input
            type="number"
            name="precio"
            id="pre"
            className="input__precio"
          />

          <input type="submit" value="Guardar" className="input__submit" />
        </form>
      </div>
    </>
  );
}
export default Crear;
