import React, {Suspense} from "react";
import taller_escultura from "../assets/imagenes/taller_escultura.webp";
import taller_pintura from "../assets/imagenes/taller_pintura.webp";
import sala_exposicion from "../assets/imagenes/sala_exposicion.webp";
import directora from "../assets/imagenes/directora.webp";
const Direccion = React.lazy(() => import("./Direccion"));

function Nosotros() {
  return (
    <>
      <div className="nosotros__contenedor">
        {/* ---PRIMERA DIV---INTRODUCCION Y FINALIDAD DE LA ESCUELA--------- */}
        <div className="nosotros">
          <div className="nosotros__div">
            <h2 className="actividad__h2"> La escuela</h2>

            <p className="actividad__p">
              Nace como una sala de exposición con la finalidad de apoyar a
              jóvenes principiantes en su incursión al mundo del arte; con el
              tiempo fue incorporando pequeñas charlas y talleres sobre técnicas
              actuales y hoy por hoy, nuestro centro imparte clases en distintas
              áreas artísticas y artesanales.
            </p>

            <p className="actividad__p">
              La Escuela ha ido adaptando los cursos talleres según necesidades
              del alumnado y nuevas tendencias; y con ello ha ido creciendo
              nuestro personal; Todos los tutores y encargados de los cursos
              están debidamente cualificados para enseñar, además de la
              formación en las artes plásticas.
            </p>
          </div>
        </div>

        {/* ---SEGUNDO DIV---'ESPACIOS '--------- */}

        <div className="nosotros">
          <div className="nosotros__texto">
            <h3 className="nosotros__h3">Espacios</h3>
            <p className="actividad__p">
              Contamos con varias salas de exposición, las cuales se usan para
              exponer tantos los proyectos estudiantiles y trabajos de conocidos
              artistas independientes del centro, tambien para eventos y
              funciones culturales.
            </p>
            <p className="actividad__p">
              ...Y los más importantes, los espacios donde se crea la magia:
              taller de ebanisteria, de ilustrado, de moldeado, de fotografia y
              dos salas de pintura.
            </p>
          </div>

          <div className="nosotros__img">
            <img
              src={taller_escultura}
              loading="lazy"
              alt="taller de escultura"
            />
            <img src={taller_pintura} loading="lazy" alt="taller de pintura" />
            <img
              src={sala_exposicion}
              loading="lazy"
              alt="sala de exposicion"
            />
          </div>
        </div>

        {/* ---TERCER DIV---'DIRECCION'--------- */}

        <div className="nosotros">
          <div className="nosotros__img">
            <img
              src={directora}
              loading="lazy"
              alt="la directora de la escuela"
            />
          </div>
          <div className="nosotros__texto">
            <h3 className="nosotros__h3">Dirección</h3>
            <h4 className="nosotros__h4">Amanda Rosario Delay</h4>
            <p className="actividad__p">
              Licenciada en Bellas Artes con Másteres en Ilustración y Pintura
              de la Facultad de Artes de la Universitat de Barcelona. La
              acreditan poco más de 16 años dedicada a la enseñanza en
              diferentes centro, como la Universidad de Sevilla y Barcelona. Ha
              realizado numerosas exposiciones y colaborado en muchas más; ha
              ganado diveros premios y reconocimiento en varios cursos de
              pintura e ilustracion de libros infantiles.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- SESION COMPLEMENTARIA: CON DATOS DE DIRECCION Y HORARIO DE LA ESCUELA ----------- */}

      <Suspense fallback={<div>Cargando sección...</div>}>
          <section className="actividad__section">
            <Direccion />
          </section>
        </Suspense>
    </>
  );
}

export default Nosotros;
