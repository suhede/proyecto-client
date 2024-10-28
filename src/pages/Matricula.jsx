import React, { useState } from "react";

function Matricula() {
  {
    /* ---------FUNCIONALIDAD DEL CREAR DEL CRUD DE LA BASE DE DATOS EN ESTE CASO 'UN REGISTRO' ------------ */
  }

  const { VITE_API_MATRICULA } = import.meta.env;
  const [formData, setFormData] = useState({
    Nombre: "",
    Email: "",
    Curso: "",
  });

  function cambiaDatos(e) {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      {/* ---------EL ENVIO DE LOS DATOS ES DIRECTO AL USAR 'ACTION', Y 'METHOD' COMO ATRIBUTO EN EL FORMULARIO-------- */}

      <div className="matricula__contenedor">
        <h2 className="matricula__h2">Escribenos y reserva plaza</h2>
        <form
          action={VITE_API_MATRICULA}
          method="Post"
          className="form__matricula"
        >
          <label htmlFor="nom">Nombre:</label>
          <input
            type="text"
            name="Nombre"
            id="nom"
            value={formData.Nombre}
            onChange={cambiaDatos}
            autoComplete="on" 
            className="input__crear"
          />

          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            name="Email"
            id="mail"
            value={formData.Email}
            onChange={cambiaDatos}
            autoComplete="on" 
            className="input__crear"
          />

          <label htmlFor="taller">Curso:</label>
          <input
            type="text"
            name="Curso"
            id="taller"
            value={formData.Curso}
            onChange={cambiaDatos}
           autoComplete="on"
            className="input__crear"
          />

          <input type="submit" value="Enviar" className="input__submit" />
        </form>
      </div>
    </>
  );
}

export default Matricula;
