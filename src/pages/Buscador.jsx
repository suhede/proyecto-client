import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Buscador() {
  const [buscador, setBuscador] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const { VITE_API_LISTA } = import.meta.env;
    const controller = new AbortController();
    const options = {
      method: "Get",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    };
    fetch(VITE_API_LISTA + "buscar/" + id, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articulos);
        if (data.status === "success") {
          setBuscador(data.articulos[0]);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => controller.abort());
  }, [id]);

  return (
    <>
      <div>
        {/* ---------------DIV QUE CON LOS DATOS DEL CURSO BUSCADO-----COMO LA VISTA DE DETALLES------- */}
        {buscador ? (
          <div className="div__buscador">
            <div className="div__img">
              <img src={buscador.Imagen} alt="imagen en alusión al curso" />
            </div>
            <div className="div__curso">
              <h3>{buscador.Nombre}</h3>
              <p>{buscador.Descripcion}</p>
              <p>
                <strong>Impartido por: </strong> {buscador.Tutor}
              </p>
              <p>
                <strong>Duración: </strong> {buscador.Duracion}
              </p>
              <p>
                <strong>Precio: </strong> {buscador.Precio}€
              </p>
            </div>
          </div>
        ) : (
          <p>No se ha encontrado curso</p>
        )}
      </div>
    </>
  );
}

export default Buscador;
