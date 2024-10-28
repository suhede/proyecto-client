import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Eliminar() {
  {
    /* ------FUNCIONALIDAD DE ELIMINAR DEL CRUD DE LA BASE DE DATOS ------------ */
  }

  const { id } = useParams();
  const navigate = useNavigate();

  function borraDato() {
    const { VITE_API_LISTA } = import.meta.env;
    const controller = new AbortController();
    const options = {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
      signal: controller.signal,
    };

    fetch(VITE_API_LISTA, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "Perfecto!") {
          window.location.href = "/lista"; // se redirige al listado recargando la pagina y actualizar los datos
        }
      })
      .catch((error) => {
        console.error("Error al borrar datos:", error);
      });
     return() => {controller.abort();

     };
  }

  function mantenDato() {
    navigate("/lista"); // te redirige a listado sin recargar la pagina
  }

  return (
    <>
      <h2 className="crear__h2">¿Estás seguro de querer borrar?</h2>
      <div className="eliminar">
        <button
          type="button"
          onClick={borraDato}
          className="eliminar__botton uno"
        >
          Si
        </button>
        <button
          type="button"
          onClick={mantenDato}
          className="eliminar__botton dos"
        >
          No
        </button>
      </div>
    </>
  );
}
export default Eliminar;
