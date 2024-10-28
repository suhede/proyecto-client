import React,{useState, useRef} from 'react';
import { Link } from "react-router-dom";

function Desplegable () {

    const [isOpen, setIsOpen] = useState(false);
  
    function menuDesplegable(){
        setIsOpen(!isOpen);
    };
      const menuRef = useRef(null);
      const menupalRef =useRef (null);
    
    function metodoMenu (event){
      
      menuRef.current.classList.toggle('is-active');
      menupalRef.current.classList.toggle('is_active');
      event.preventDefault();
    };

  return (
    <>
    <div className='burger' ref={menuRef} onClick={metodoMenu}>
      <div className='capa -arriba'></div>
      <div className='capa -media'></div>
      <div className='capa -baja'></div>
    </div>

    <div className='menupal' ref={menupalRef}>
{/* ----------------------Lista de la barra de navegación-------------------------------------------------- */}
<ul className="menu">
        <li ><Link to={"/"}> Inicio </Link>{" "}</li>
          {localStorage.getItem("usuario") == null ? (
            <></>
          ) : (
            <li><Link to={"/lista"} onClick={menuDesplegable} > Cursos </Link>
              {isOpen && (
                <ul className='submenu'>
                    <li ><Link to={"/crear"}>  Agregar-Cursos </Link></li>
                    <li><Link to={"/registro"}> Registro </Link></li>
                    <li ><Link to={"/galeria"} > Agregar-Proyectos </Link></li>
                    
                </ul>
              )}
        </li>
          
         )}
         
          <li> <Link to={"/actividad"} onClick={menuDesplegable}> Actividades </Link>
            {isOpen && (
                <ul className='submenu'>
                  <li><Link to={"/proyecto"} > Proyectos </Link></li>
                     <li><Link to={"/nosotros"} > Nosotros </Link> </li>
                </ul>
            )}
          </li>
          <li><Link to={"/contacto"}> Contactos </Link> </li>
        </ul>
        </div>
    </>
  )
}

export default Desplegable;