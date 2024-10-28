import React, { useState, useEffect, Suspense } from "react";
const Direccion = React.lazy(() => import("./Direccion"));

function Proyectos() {
  {
    /* -----------------FUNCIONALIDAD DE LECTURA DEL CRUD DE LA BASE DE DATOS ------------ */
  }
  // -------EN ESTE CASO PARA VISUALIZAR LOS PROYECTOS ESTUDIANTILES EN EXPOSICION------------

  const [proyecto, setProyecto] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { VITE_API_PROYECTOS } = import.meta.env;
    const options = {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    };

    fetch(VITE_API_PROYECTOS, options)
      .then((res) => res.json())
      .then((data) => {
        setProyecto(data.proyectos);
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
      <h2 className="actividad__h2"> Galeria de Proyectos Estudiantiles</h2>
      {proyecto.map((galeria) => {
        return (
          <div key={galeria._id} className="proyecto__contenedor">
            <div className="proyecto__datos">
              <h4> {galeria.Curso}</h4>
              <h5>
                {" "}
                <strong> Titulo:</strong> {galeria.Titulo}
              </h5>
              <h5>
                {" "}
                <strong> Por:</strong> {galeria.Autor}
              </h5>
            </div>

            <div className="proyecto__img">
              <img
                src={galeria.Imguno}
                loading="lazy"
                alt="img uno de la coleccion"
              />
              <img src={galeria.Imgdos} loading= 'lazy' alt="img dos de la coleccion" />
              <img src={galeria.Imgtres}  loading="lazy" alt="img tres de la coleccion" />
              <img src={galeria.Imgcuatro}  loading="lazy" alt="img cuatro de la coleccion" />
              <img src={galeria.Imgcinco}  loading="lazy" alt="img cinco de la coleccion" />
              <img src={galeria.Imgseis}  loading="lazy" alt="img seis de la coleccion" />
            </div>
          </div>
        );
      })}

      {/* ---------------- SESION COMPLEMENTARIA: CON DATOS DE DIRECCION Y HORARIO DE LA ESCUELA ----------- */}
      <Suspense fallback={<div>Cargando sección...</div>}>
          <section className="actividad__section">
            <Direccion />
          </section>
        </Suspense>
    </>
  );
}
export default Proyectos;
