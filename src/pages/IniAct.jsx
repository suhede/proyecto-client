import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/imagenes/logo_instagran.png";

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
              src="https://live.staticflickr.com/65535/54108237426_4c3e616b23_w.jpg"
              loading="lazy"
              alt="una chica con sombrero miranda un cuadro "
            />
            <img
              src="https://live.staticflickr.com/65535/54108688485_9dd4ba1804_z.jpg"
              loading="lazy"
              alt="foto del museo de arte de bilbao"
            />
            <img
              src="https://live.staticflickr.com/65535/54108688115_be5fc0f848.jpg"
              loading="lazy"
              alt="una chica de espalda en pasillo de galeria"
            />
            <img
              src="https://live.staticflickr.com/65535/54107366927_bd047c15a7_n.jpg"
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