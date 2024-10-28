import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [buscar, setBuscar] = useState("");
  const navegar = useNavigate();

  function busqueda(e) {
    e.preventDefault();
    let consulta = e.target.explorar.value;
    navegar("/buscar/" + consulta, { replace: true });
  }

  return (
    <>
      <div className="search">
        <div>
          <form action="#" onSubmit={busqueda}>
       
            <input
              type="text"
              name="explorar"
              id="explora"
              className="input__buscar"
              placeholder="Aquí nombre del curso!"
            />
            <input
              type="submit"
              id="busca"
              value="Buscar"
              className="submit__buscar"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Search;
