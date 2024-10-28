import React from "react";

function Direccion() {
  return (
    <>
      <section className="direccion">
        {/* -----ESTA SESION ES COMPLEMENTARIA PARA LAS DEMAS PAGINAS 
        AL MOSTRANDO DIRECCION Y HORARIO Y CONTACTO DE LA ESCUELA---- */}

        <div className="direccion__datos">
          <div className="datos__box">
            <h2>Contáctanos en:</h2>
            <h3>shescueladearte@gmail.com</h3>
            <h3>689 222 222</h3>
            <h3>Calle Al Alba nº 67</h3>
            <h3>42014, Sevilla</h3>
          </div>

          <div className="datos__box">
            <h2>Horarios:</h2>
            <h3>Lunes-Viernes: 9:00/21:00</h3>
            <h3>Sábados: 10:00/14:00</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Direccion;
