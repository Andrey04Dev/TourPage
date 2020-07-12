import React, { useEffect, Fragment } from "react";
import ReactDOM from 'react-dom'
import { NavLink } from "react-router-dom";
import FormularioLogin from "../Formularios/FormularioLogin";
import { useState } from "react";
import FormularioRegistrarse from "../Formularios/FormularioRegistrarse";
import "./Navbar.css";


//Funcion para que boton Hamburguer de NavBar
const Toggle =()=>{
  let nav =  document.querySelector('.navbar-collapse')
  let btnHam = document.querySelector('.navbar-toggler')

  btnHam.addEventListener('click',(()=>{
    nav.classList.toggle('collapse')
  }))
  nav.addEventListener('click',()=>{
    nav.classList.toggle('collapse')
  })
}
//Empieza el componente del NavBar
const NavBar = () => {
  const [estado, setEstado] = useState(false)
  const [estadoReg, setEstadoReg] = useState(false)

  const abrirLogin =()=>{
    setEstado(!estado)
  }

  const cerrarLogin=()=>{
    setEstado(!estado)
  }
  const abrirRegistrar =()=>{
    setEstadoReg(!estadoReg)
  }

  const cerrarRegistrar =()=>{
    setEstadoReg(!estadoReg)
  }
  useEffect(()=>{
    Toggle()
  })
  return ReactDOM.createPortal (
    <Fragment>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to='/'>Navbar</NavLink>
      <button className="navbar-toggler" type="button">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse text-center">
        <ul className=" navbar-nav ml-auto">
          <li className='nav-item'>
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link text-white" to="/tours">
              Tours
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link text-white" to="/actividades">
              Actividades
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link text-white" to="/contactanos">
              Contactanos
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
        <li className='nav-item'>
            <button className=" btn btn-outline-danger  ml-2 mr-3 mb-2" onClick={abrirRegistrar}>
              Registrarse
            </button>
          </li>
          <li className='nav-item'>
            <button id='login' className=" btn btn-outline-primary mr-1" onClick={abrirLogin} >
              Login
            </button>
          </li>
        </ul>
        </div>
      </nav>
      <FormularioRegistrarse mostrar={estadoReg} cerrar={cerrarRegistrar}/>
      <FormularioLogin mostrar={estado} cerrar={cerrarLogin}/>
    </Fragment>,document.querySelector('#header')
  );
};

export default NavBar;
