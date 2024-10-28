import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListaPrevia({ limite }) {
  {
    /* -----------------FUNCIONALIDAD DE LECTURA DEL CRUD DE LA BASE DE DATOS / INICIO/ ------------ */
  }
  const [listado, setListado] = useState([]);

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

    fetch(VITE_API_LISTA, options)
      .then((res) => res.json())
      .then((data) => {
        setListado(data.arrayArticulos);
      })
      .catch((error) => {
        console.error("Error:" + error);
      });
      return() => {
        controller.abort();
      };
  }, []);

  return (
    <>
      {/* ---MEDIANTE EL METODO 'MAP' DEVOLVEMOS LOS DATOS PEDIDO POR FETCH----- */}
      <div className="previa">
        {listado.slice(0, limite).map((lista) => {
          return (
            <div key={lista._id} className="lista__previa">
              <div className="previa__box">
                <img src={lista.Imagen} loading="lazy" alt="imagen del curso" />
              </div>
              <h3>
                <Link to={"/lista/" + lista._id}>{lista.Nombre}</Link>{" "}
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListaPrevia;
