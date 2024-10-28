import React, { useState, useEffect } from "react";

function Registro() {
  {
    /* -----------------FUNCIONALIDAD DE LECTURA DEL CRUD DE LA BASE DE DATOS ------------ */
  }
  // -------EN ESTE CASO PARA VISUALIZAR EL REGISTRO DE MATRICULAS Y RESERVAS DE PLAZAS------------

  const [registro, setRegistro] = useState([]);

  useEffect(() => {
    const { VITE_API_MATRICULA } = import.meta.env;
    const controller = new AbortController();
    const options = {
      method: "Get",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
    };

    fetch(VITE_API_MATRICULA, options)
      .then((res) => res.json())
      .then((data) => {
        setRegistro(data.arrayMatriculas);
      })
      .catch((err) => console.log(err));
      return() => {
        controller.abort();
      };
  }, []);

  return (
    <>
      <h2 className="lista__h2">Registro de Reservas/Pre-inscripciones</h2>
      <div className="registro">
        {registro.map((lista) => {
          return (
            <div key={lista._id} className="registro__div">
              <div className="lista__registro">
                <h3>{lista.Nombre.toUpperCase()} </h3>
                <h4>{lista.Email.toUpperCase()}</h4>
                <h4>
                  {" "}
                  <span>{lista.Curso.toUpperCase()}</span>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Registro;
