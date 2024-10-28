import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Actualizar() {
  {
    /* ------FUNCIONALIDAD DE ACTUALIZAR DEL CRUD DE LA BASE DE DATOS ------------ */
  }

  const { id } = useParams();
  const [datos, setDatos] = useState({
    Nombre: "",
    Descripcion: "",
    Tutor: "",
    Imagen: "",
    Duracion: "",
    Precio: "",
  });

  useEffect(() => {
    const { VITE_API_LISTA } = import.meta.env;
    const controller = new AbortController();
    const options = {
      method: "Get",
      headers: {
        "Content-Type": "Application/json",
      },
      signal: controller.signal,
    };

    fetch(VITE_API_LISTA + "/" + id, options)
      .then((res) => res.json())
      .then((data) => {
        setDatos(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      return () => {
        controller.abort();
      };
  }, [id]);
  //-------------------------------FUNCION CAMBIAR EL NOMBRE Y VALOR DE LOS INPUTS------------------------------------------------
  function cambiaValor(e) {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  }

  // ---------------------------FUNCION PARA ENVIAR LOS DATOS DEL FORMULARIO--------------
  function enviarForm(e) {
    e.preventDefault();
    const controller = new AbortController();
    const { VITE_API_LISTA } = import.meta.env;
    const options = {
      method: "Put",
      headers: { "Content-Type": "Application/json" },
      signal: controller.signal,
      body: JSON.stringify(datos),
    };
    fetch(VITE_API_LISTA, options)
      .then((res) => res.json())
      .then((data) => {
        if ((data.status == "Perfecto!")) {
          window.location.href = "/lista";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    return () => {
      controller.abort();
    };
  }

  return (
    <>
      {/* -----------------FORMULARIO------------ */}
      <div className="crear__contenedor">
        <h2 className="crear__h2"> Actualizar datos de Cursos/Articulos</h2>

        <form action="#" method="post" onSubmit={enviarForm} className="form">
          <label htmlFor="nom">Nombre: </label>
          <input
            type="text"
            name="Nombre"
            id="nom"
            value={datos.Nombre}
            onChange={cambiaValor}
            className="input__crear"
          />

          <label htmlFor="desc">Descripcion: </label>
          <input
            type="text"
            name="Descripcion"
            id="desc"
            value={datos.Descripcion}
            onChange={cambiaValor}
            className="input__crear"
          />

          <label htmlFor="por">Tutor:</label>
          <input
            type="text"
            name="Tutor"
            id="por"
            value={datos.Creador}
            onChange={cambiaValor}
            className="input__crear"
          />

          <label htmlFor="img">Imagen</label>
          <input
            type="text"
            name="Imagen"
            id="img"
            value={datos.Imagen}
            onChange={cambiaValor}
            className="input__crear"
          />

          <label htmlFor="time">Duración:</label>
          <input
            type="text"
            name="Duracion"
            id="time"
            value={datos.Duracion}
            onChange={cambiaValor}
            className="input__crear"
          />

          <label htmlFor="pre">Precio:</label>
          <input
            type="number"
            name="Precio"
            id="pre"
            value={datos.Precio}
            onChange={cambiaValor}
            className="input__precio"
          />

          <input type="submit" value="Actualizar" className="input__submit" />
        </form>
      </div>
    </>
  );
}
export default Actualizar;
