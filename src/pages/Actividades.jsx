import React, {Suspense} from 'react';
import museo from '../assets/imagenes/museo.webp';
import visita_museo from '../assets/imagenes/visita_museo.webp';
import galeria_blanco_negro from '../assets/imagenes/galeria_blanco_negro.webp';
import visita_catedral from '../assets/imagenes/visita_catedral.webp';
import galeria_luz_natura from '../assets/imagenes/galeria_luz_natura.webp';
import dibujo_circulos from '../assets/imagenes/dibujo_circulos.webp';
import pera_pintura from '../assets/imagenes/pera_pintura.webp';
import sda_pintura from '../assets/imagenes/sda_pintura.webp';
import tera_pintura from '../assets/imagenes/tera_pintura.webp';
import niño_pintando from '../assets/imagenes/niño_pintando.webp';
const Direccion = React.lazy(() => import("./Direccion"));


function Actividades () {
  return (
    <>
    <div className='actividad__contenedor'>

        <h2 className="actividad__h2">Actividades de la Escuela</h2>

{/* ----------------PRIMERA SESION CON LA FUNCIONALIDAD DE 'VISITAS A LOS MUSEOS Y EXPOSICIONES' ----------- */}

        <section className='actividad__section'>
            <h3 className="actividad__h3">Visitas guiadas a distintos museos y exposiciones</h3>
            <div className='actividad__visitas'>
                <div className='div__img'>
                    <img src={museo} loading='lazy' alt="museo" className='img__museo' />
                </div>

                <div className='div__texto'>
                    <p className='actividad__p'>La escuela organiza visitas guiadas a diferentes museos del pais
                        y distintas galerias de arte que colaboran con el centro;
                        esta actividad va dirigida principalmente al alumnado del centro como actividad lúdica,
                        pero tambien se le permite participar a cualquier persona interesada en el arte
                        y los museos en general.</p>
                        <p className='actividad__p'>Se suelen hacer ochos visitas al mes, dos por semana 
                        y el itinerario se cambia cada seis meses,
                        lo cual nos permite abarcar las mayoria de los museos del pais. </p>
                </div>
            </div>

            <div className='div__visitas'>
                 <div className='visitas__box' >
                    <div className='img__a'>
                    <img src={visita_museo} loading='lazy' alt="visita al museo" />
                    </div>
                    <div className='img__b'>
                    <p>SH Escuela de arte</p>
                    </div>
                </div>

                <div className='visitas__box' >
                    <div className='img__a'>
                    <img src={galeria_blanco_negro} loading='lazy' alt="foto galeria blanco y negro" />
                    </div>
                    <div className='img__b'>
                    <p>SH centro artistico y cultural</p>
                    </div>
                </div>

                <div className='visitas__box' >
                    <div className='img__a'>
                    <img src={visita_catedral} loading='lazy' alt="foto galeria techo catedral" />
                    </div>
                    <div className='img__b'>
                    <p>Nuestra escuela lugar cultural</p>
                    </div>
                </div>

                <div className='visitas__box' >
                    <div className='img__a'>
                    <img src={galeria_luz_natura} loading='lazy' alt="sala de exposicion a luz natural" />
                    </div>
                    <div className='img__b'>
                    <p>Desarrolla tu habilidades creativas</p>
                    </div>
                </div>
               
            </div>
        </section>
{/* ----------------SEGUNDA SESION CON LA FUNCIONALIDAD DE 'CLASES INFANTILES SABATINAS' ----------- */}

        <section className='actividad__section'>
            <h3 className="actividad__h3">Talleres sabatinos para niños entre 8-12 años</h3>
            <div className='actividad__visitas'>
                <div className='div__img'>
                    <img src={dibujo_circulos} loading='lazy' alt="dibujo infantil en forma dircular" />
                </div>

                <div className='div__texto'>
                    <p className='actividad__p'>El curso-taller sabatino va dirigido a niños entre 8 y 12 años;
                    son grupos reducidos para brindarle a cada niño la atención necesaria.
                    Esta actividad sabatina empezó con la finalidad de apoyar a los niños a desarrollar habilidades motoras y creativas; 
                    además de actividad extra-escolar en compañia de varios centros educativos del municipio.</p>
                </div>
            </div>

            <div className='div__visitas'>

            <div className='visitas__box' >
                    <div className='img__a'>
                    <img src={pera_pintura} loading='lazy' alt="dibujo infantil con mucho colores llamativos" />
                    </div>
                    <div className='img__b'>
                    <p>SH centro artistico y cultural</p>
                    </div>
                </div>
                
                <div className='visitas__box' >
                    <div className='img__a'>
                    <img src={sda_pintura} loading='lazy' alt="dibujo infantil de flores y cesped" />
                    </div>
                    <div className='img__b'>
                    <p >Desarrolla tu habilidades creativas</p>
                    </div>
                </div>

                <div className='visitas__box' >
                    <div className='img__a'>
                    <img src={tera_pintura} loading='lazy' alt="recipientes de madera con pinturas de varios colores" />
                    </div>
                    <div className='img__b'>
                    <p>SH Escuela de arte</p>
                    </div>
                </div>

                <div className='visitas__box' >
                    <div className='img__a'>
                    <img src={niño_pintando} loading='lazy' alt="niño despalda pintando un muro" />
                    </div>
                    <div className='img__b'>
                    <p>Nuestra escuela lugar cultural</p>
                    </div>
                </div>
                
            </div>
        </section>
 
    </div>

    {/* ----------------TERCERA SESION COMPLEMENTARIA: CON DATOS DE DIRECCION Y HORARIO DE LA ESCUELA ----------- */}
    <Suspense fallback={<div>Cargando sección...</div>}>
          <section className="actividad__section">
            <Direccion />
          </section>
        </Suspense>

</>
  )
}

export default Actividades;