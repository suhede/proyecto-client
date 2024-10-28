import React, { useRef } from "react";
import email from "@emailjs/browser";
import { Link } from "react-router-dom";
import logo from "../assets/imagenes/logo_instagran.png";

function Contacto() {
  const formulario = useRef();

  // ------FUNCION PARA ENVIAR LOS DATOS DEL FORMULARIO---
  //------SE ESTA UTILIZANDO UN PAQUETE DE MENSAJERIA 'EMAILJS'---
  function enviarForm(e) {
    e.preventDefault();
    const serviceId = "service_q36a2oc";
    const templateId = "template_qh3xj44";
    const apiKey = "NeonMOKVJOU-7AsTF";
    email
      .sendForm(serviceId, templateId, formulario.current, apiKey)
      .then((result) => {
        console.log(result);
        if (result.status) {
          alert("Mensaje enviado con exito!!");
          window.location.replace("/");
        } else {
          alert("Lo siento: Problema de Conexión");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <section className="contacto">
        <div className="contacto__img"> </div>

        <div className="contacto__datos">
          {/* -------------DATOS DE DIRECCION Y CONTACTO DE LA ESCUELA------------- */}

          <div className="datos">
            <h2>Contactanos en:</h2>
            <h3>shescueladearte@gmail.com</h3>
            <h3>689 222 222</h3>
            <h3>Calle Al Alba nº 67.</h3>
            <h3>42014, Sevilla</h3>
            <h2>Horarios:</h2>
            <h3>Lunes-Viernes: 9:00/21:00</h3>
            <h3>Sábados: 10:00/14:00</h3>
            <h2>
              Siguenos en{" "}
              <Link
                to="https://www.instagram.com/shcontemporaneo/"
                target="_blank"
              >
                <img src={logo} loading="lazy" alt="logo de instagram" />
              </Link>
            </h2>
          </div>

          <div className="contacto__div">
            {/* -----------------FORMULARIO DE COMENTARIOS Y CONTACTO DIRECTO------------ */}

            <form
              action="mailto:shescueladearte@gmail.com"
              ref={formulario}
              method="Post"
              onSubmit={enviarForm}
              className="contacto__form"
            >
              <h3 className="form__h3">Dejanos tus comentarios</h3>
              <label htmlFor="nombre">Nombre </label>
              <input
                className="input"
                type="text"
                name="nombre"
                id="nombre"
                required
              />

              <label htmlFor="correo">Correo Electronico</label>
              <input
                className="input"
                type="email"
                name="correo"
                id="correo"
                placeholder="shgaleria@artetempo.com"
                required
              />

              <label htmlFor="asunto">Asunto</label>
              <input className="input" type="text" name="asunto" id="asunto" />

              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                className="input"
                name="mensaje"
                id="mensaje"
                placeholder="Escribe aqui!"
              />
              <input className="input__submit" type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contacto;
