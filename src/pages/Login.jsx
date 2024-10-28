import React, { useState } from "react";

function Login() {
  const [datosUsu, setDatosUsu] = useState({ Nombre: "", Password: "" });
  const [error, setError] = useState("");

  //-------------------------------FUNCION CAMBIAR  VALOR DE LOS INPUTS--------
  function cambiaDatos(e) {
    const { name, value } = e.target;
    setDatosUsu({ ...datosUsu, [name]: value });
  }
  // -------------------FUNCION PARA ENVIAR LOS DATOS DEL FORMULARIO Y COMBROBACION DEL USUARIO------------

  function enviarDatos(e) {
    e.preventDefault();
    const controller = new AbortController();
    const { VITE_API_USER } = import.meta.env;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosUsu),
      signal: controller.signal,
    };
    fetch(VITE_API_USER, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "failed") {
          setError(data.error);
        } else {
          setError("Correcto, iniciando sesion");
          localStorage.setItem("usuario", datosUsu.Nombre);
          localStorage.setItem("password", datosUsu.Password);
          setTimeout(() => {
            window.location.replace("/");
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
      });
      return() =>{ 
        controller.abort();
      };
  }

  {
    /* -----------------FORMULARIO------------ */
  }
  return (
    <div className="login__container">
      <form action="#" method="POST" onSubmit={enviarDatos} className="login">
        <label htmlFor="nom" className="login__label">
          Nombre:
        </label>
        <input
          type="text"
          name="Nombre"
          id="nom"
          onChange={cambiaDatos}
          value={datosUsu.Nombre}
          autoComplete="on"
          className="login__input"
        />

        <label htmlFor="pass" className="login__label">
          Contraseña:
        </label>
        <input
          type="password"
          name="Password"
          id="pass"
          onChange={cambiaDatos}
          value={datosUsu.Password}
          autoComplete="off"
          className="login__input"
        />

        <input type="submit" value="Iniciar Sesion" className="login__submit" />
        {error != "" ? <p>{error}</p> : <></>}
      </form>
    </div>
  );
}
export default Login;
