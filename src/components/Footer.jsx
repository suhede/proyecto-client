import React from "react";
import {Link} from 'react-router-dom';

function Footer(){

    return(
      <>
      
    <footer className='footer'>

     <h6> &copy; Proyecto Final Desarrollo Web FullStack</h6> 
     <h6>"Datos proporcionados son con fines exclusivamente didácticos"</h6>
        <Link to='https://github.com/suhede' target="_blank">Susana  Heredia De los Santos</Link>
    </footer>
    
    </>
    )
}
export default Footer;
