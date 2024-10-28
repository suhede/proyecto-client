import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListaArticulos() {
  {
    /* -----------------FUNCIONALIDAD DE LECTURA DEL CRUD DE LA BASE DE DATOS ------------ */
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
      {/* ----USANDO METODO 'MAP' PARA QUE EL FETCH ANTERIOR NOS DEVUELVA LOS DATOS SEGUN EL ORDEN DADO------------ */}
      <div className="cursos">
        <h2 className="lista__h2">Listado Cursos Formativos</h2>
        {listado.map((lista) => {
          return (
            <div key={lista._id} className="div__lista">
              <div className="div__img">
                <img src={lista.Imagen} loading="lazy" alt="imagen del curso" />
              </div>

              <div className="div__curso">
                <h3>
                  <Link to={"/lista/" + lista._id} className="link__crud">
                    {lista.Nombre}
                  </Link>{" "}
                </h3>
                <h4>{lista.Descripcion}</h4>
                <Link to={"/editar/" + lista._id} className="link__crud">
               Editar
                </Link>{" "}
                ||
                <Link to={"/borrar/" + lista._id} className="link__crud">
               Borrar
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ListaArticulos;
