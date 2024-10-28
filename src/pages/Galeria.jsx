import React, { useState } from "react";

const Galeria = () => {
  {
    /* -----------------FUNCIONALIDAD DEL CREAR DEL CRUD DE LA BASE DE DATOS ------------ */
  }
  // -----EN ESTE CASO ---SE ESTA AGREGANDO A LA BASE DATOS LOS PROYECTOS ESTUDIANTILES PARA EXPOSICION-----

  const { VITE_API_PROYECTOS } = import.meta.env;
  const [formDatos, setFormDatos] = useState({
    Curso: "",
    Titulo: "",
    Autor: "",
    Imguno: "",
    Imgdos: "",
    Imgtres: "",
    Imgcuatro: "",
    Imgcinco: "",
    Imgseis: "",
  });

  function nuevoDatos(e) {
      const { name, value } = e.target
    setFormDatos({ ...formDatos, [name]: value });
  }

  return (
    <>
      {/* -----------------FORMULARIO------------ */}
      {/* ---------EL ENVIO DE LOS DATOS ES DIRECTO AL USAR 'ACTION', Y 'METHOD' COMO  EN EL FORMULARIO-------- */}
      <div className="crear__contenedor">
        <h2 className="crear__h2"> Agregar datos proyectos estudiantiles</h2>
        <form action={VITE_API_PROYECTOS} method="Post" className="form">
          <label htmlFor="nom">Curso:</label>
          <input
            type="text"
            name="Curso"
            id="nom"
            value={formDatos.Curso}
            onChange={nuevoDatos}
            className="input__crear"
          />

          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="Titulo"
            id="title"
            value={formDatos.Titulo}
            onChange={nuevoDatos}
            className="input__crear"
          />

          <label htmlFor="nom">Autor:</label>
          <input
            type="text"
            name="Autor"
            id="creador"
            value={formDatos.Autor}
            onChange={nuevoDatos}
            className="input__crear"
          />

          <label htmlFor="uno">ImgUno:</label>
          <input
            type="text"
            name="Imguno"
            id="uno"
            value={formDatos.Imguno}
            onChange={nuevoDatos}
            className="input__crear"
          />

          <label htmlFor="dos">ImgDos:</label>
          <input
            type="text"
            name="Imgdos"
            id="dos"
            value={formDatos.Imgdos}
            onChange={nuevoDatos}
            className="input__crear"
          />

          <label htmlFor="tres">ImgTres:</label>
          <input
            type="text"
            name="Imgtres"
            id="tres"
            value={formDatos.Imgtres}
            onChange={nuevoDatos}
            className="input__crear"
          />

          <label htmlFor="cuatro">ImgCuatro:</label>
          <input
            type="text"
            name="Imgcuatro"
            id="cuatro"
            value={formDatos.Imgcuatro}
            onChange={nuevoDatos}
            className="input__crear"
          />

          <label htmlFor="cinco">ImgCinco:</label>
          <input
            type="text"
            name="Imgcinco"
            id="cinco"
            value={formDatos.Imgcinco}
            onChange={nuevoDatos}
            className="input__crear"
          />

          <label htmlFor="seis">ImgSeis:</label>
          <input
            type="text"
            name="Imgseis"
            id="seis"
            value={formDatos.Imgseis}
            onChange={nuevoDatos}
            className="input__crear"
          />

          <input type="submit" value="Enviar" className="input__submit" />
        </form>
      </div>
    </>
  );
};

export default Galeria;
