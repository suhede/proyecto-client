import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/imagenes/logo_instagran.png";
import visitaUno from "../assets/imagenes/visita_uno.webp";
import visitaDos from "../assets/imagenes/visita_dos.webp";
import visitaTres from "../assets/imagenes/visita_tres.webp";
import visitaCuatro from "../assets/imagenes/visita_cuatro.webp";

function IniAct () {
  return (
    <>
   <h2 className="inicio__h2b"> Nuestra actividades</h2>
          <div className="inicio__div-siete">
            <p className="inicio__p ">
              {" "}
              En <span> SH Escuela de Arte</span> las clases se imparten
              haciendo usos distintos lenguajes artísticos y con el objetivo de
              mejorar la experiencia con diferentes actividades para que el
              conocimiento de las artes plásticas sea completo.
            </p>
            <p className="inicio__p ">
              {" "}
              Participa en las visitas guiadas a diferentes museos y galerias de
              arte. Hacemos dos visitas cada semanas, a localidades artisticas y
              eventos de galerias colaboradoras.
            </p>
          </div>

          <div className="inicio__div-ocho">
            <img
              src={visitaUno}
              loading="lazy"
              alt="una chica con sombrero miranda un cuadro "
            />
            <img
              src={visitaDos}
              loading="lazy"
              alt="foto del museo de arte de bilbao"
            />
            <img
              src={visitaTres}
              loading="lazy"
              alt="una chica de espalda en pasillo de galeria"
            />
            <img
              src={visitaCuatro}
              loading="lazy"
              alt="una sala de exposicion con un cuadro muy grande "
            />
          </div>
          <h2 className="instagram__h2">
            Puedes seguirnos en:
            <Link
              to="https://www.instagram.com/shcontemporaneo/"
              target="_blank"
            >
              <img src={logo} loading="lazy" alt="logo de instagram" />
            </Link>
          </h2>
   
    
    </>
  )
}

export default IniAct;