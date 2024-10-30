import React,{Suspense} from "react";
const IniUno = React.lazy(() => import("./IniUno"));
const IniAct = React.lazy(() => import("./IniAct"));
const Direccion = React.lazy(() => import("./Direccion"));
const ListaPrevia = React.lazy(() => import("./ListaPrevia"));
const Matricula = React.lazy(() => import("./Matricula"));
import abstracta from "../assets/imagenes/pintura-abstracta-de-una-cuidad.webp";

function Inicio() {
  return (
    <>
      <div className="inicio__contenedor">
        {/* ----------------------SESION UNO-------------------- */}
        <section className="inicio__sesion-uno">
        <Suspense fallback={<h2>Cargando....</h2>}>
        <IniUno/>
          </Suspense>
        </section>
        {/* -----------------------SESION DOS--------------------------------------- */}
        <section className="inicio__sesion-dos">
          <div className="inicio__div-tres">
            <p className="inicio__p ">
              {" "}
              <span>El arte</span> es conocido como una acción o el resultado de
              algo realizado con una finalidad estética y comunicativa, que
              expresa ideas, emociones y, por lo general, una visión del mundo.
              Es un integrante de la cultura, muestra una noción de la sociedad,
              y valores inherentes de la humanidad a lo largo del espacio y el
              tiempo.
            </p>{" "}
            <p className="inicio__p ">
              {" "}
              Te damos la oportunidad de dar rienda suelta a tu imaginación, porque la creatividad no es más que
              la inteligencia divirtiendose.
            </p>
          </div>

          <div className="inicio__div-cuatro">
            <img
              src={abstracta}
              loading="lazy"
              alt="imagen unida a la definicion de arte"
            />
          </div>
        </section>
        {/* -----------------------SESION TRES--------------------------------------- */}
        <section className="inicio__sesion-tres">
          <h2 className="inicio__h2b">
            Algunos de los cursos que impartimos
          </h2>
          <Suspense fallback={<h2>Cargando....</h2>}>
          <div className="inicio__div-cinco">
            <ListaPrevia limite="6" />
            <Matricula />
          </div>
          </Suspense>
          <div className="inicio__div-seis">
            <h3>
              ------ Reserva <strong>Ahora!!</strong>
              ------y obten un <strong>20% </strong> de descuento en la
              matricula------Anímate y sé parte de nuestro espacio creativo.
            </h3>
          </div>
        </section>
        {/* -----------------------SESION CUATRO--------------------------------------- */}
        <Suspense fallback={<div>Cargando sección...</div>}>
        <section className="inicio__sesion-cuatro">
          <IniAct/>
        </section>
        </Suspense>
        {/* --------------------SESION CINCO----------------------------------- */}
      </div>

      {/* ---------------- SESION COMPLEMENTARIA: CON DATOS DE DIRECCION Y HORARIO DE LA ESCUELA ----------- */}
      <Suspense fallback={<div>Cargando sección...</div>}>
          <section className="inicio__sesion-cinco">
            <Direccion />
          </section>
        </Suspense>
    </>
  );
}
export default Inicio;
