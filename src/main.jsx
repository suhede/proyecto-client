import React,  { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";

const Inicio = React.lazy(() => import("./pages/Inicio"));
const Login = React.lazy(() => import("./pages/Login"));
const Crear = React.lazy(() => import("./pages/Crear"));
const ListaArticulos = React.lazy(() => import("./pages/ListaArticulos"));
const Detalles = React.lazy(() => import("./pages/Detalles"));
const Actualizar = React.lazy(() => import("./pages/Actualizar"));
const Eliminar = React.lazy(() => import("./pages/Eliminar"));
const Actividades = React.lazy(() => import("./pages/Actividades"));
const Nosotros = React.lazy(() => import("./pages/Nosotros"));
const Matricula = React.lazy(() => import("./pages/Matricula"));
const ListaPrevia = React.lazy(() => import("./pages/ListaPrevia"));
const Contacto = React.lazy(() => import("./pages/Contacto"));
const Registro = React.lazy(() => import("./pages/Registro"));
const Galeria = React.lazy(() => import("./pages/Galeria"));
const Proyectos = React.lazy(() => import("./pages/Proyectos"));
const Buscador = React.lazy(() => import("./pages/Buscador"));

import Footer from "./components/Footer";
import "./css/style.css";
import "./css/login.css";
import "./css/listado.css";
import "./css/registro.css";
import "./css/formularios.css";
import "./css/actividades.css";
import "./css/contacto.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Header />
      <Search />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/login"
          element={
            localStorage.getItem("usuario") == null ? <Login /> : <Inicio />
          }
        />
        <Route
          path="/lista"
          element={
            localStorage.getItem("usuario") == null ? (
              <Login />
            ) : (
              <ListaArticulos />
            )
          }
        />
        <Route path="/lista/:id" element={<Detalles />} />
        <Route path="/listaprevia" element={<ListaPrevia />} />
        <Route
          path="/crear"
          element={
            localStorage.getItem("usuario") == null ? <Login /> : <Crear />
          }
        />
        <Route path="/editar/:id" element={<Actualizar />} />
        <Route path="/borrar/:id" element={<Eliminar />} />
        <Route path="/actividad" element={<Actividades />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/matricula" element={<Matricula />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/proyecto" element={<Proyectos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/buscar/:id" element={<Buscador />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route
          path="*"
          element={
            <div className="inicio__div-uno">
              <h2 className="inicio__h2">Error: Página no encontrada</h2>
            </div>
          }
        />
      </Routes>
      </Suspense>
      <Footer />
    </Router>
  </>
);
