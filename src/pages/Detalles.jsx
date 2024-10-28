import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detalles() {
  {
    /* ----ESTA PAGINA ES UNA CONTINUACIÓN DE LA FUNCIONALIDAD LECTURA DEL CRUD, 
    CON 'LINK' Y EL 'USEPARAMS' DEL PAQUETE 'REACT-ROUTER-DOM' 
    AQUI SE PUEDEN VER LOS DETALLES DE CADA CURSO ------------ */
  }

  const [detalle, setDetalle] = useState({});
  let { id } = useParams();

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

    fetch(VITE_API_LISTA + "lista/" + id, options)
      .then((response) => response.json())
      .then((data) => {
        setDetalle(data.arrayArticulos[0])
      })
      .catch((error) => {
        console.error("Error al enviar datos:" + error);
      });
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      {/* ----USANDO METODO 'MAP' PARA QUE EL FETCH ANTERIOR 
      NOS DEVUELVA LOS DATOS SEGúN EL ORDEN DADO------------ */}
      
      <h2 className="lista__h2">Detalles Cursos-Talleres</h2>
      <div className="detalle__contenedor">
        <h3 className="detalle__h3">{detalle.Nombre}</h3>

        <div className="div__lista">
          <div className="div__img">
            <img
              src={detalle.Imagen}
              loading="lazy"
              alt="imagen en alusión al curso"
            />
          </div>
          <div className="div__curso">
            <p>{detalle.Descripcion}</p>
            <p>
              <strong>Impartido por: </strong> {detalle.Tutor}.
            </p>
            <p>
              <strong>Duración: </strong> {detalle.Duracion}.
            </p>
            <p>
              <strong>Precio: </strong> {detalle.Precio}€.
            </p>
            <Link to={"/"} className="link__crud">
              volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Detalles;
