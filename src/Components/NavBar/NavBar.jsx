import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

//Funcion para que boton Hamburguer de NavBAr
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
const NavBar = () => {

  useEffect(()=>{
    Toggle()
  })
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to='/'>Navbar</NavLink>
      <button className="navbar-toggler" type="button">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse text-center">
        <ul className=" navbar-nav  mr-auot ml-auto">
          <li className='nav-item'>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link text-white" to="/Tours">
              Tours
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link text-white" to="/Actividades">
              Actividades
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link text-white" to="/Contactanos">
              Contactanos
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
        <li className='nav-item'>
            <NavLink className=" btn btn-outline-danger  ml-2 mr-3 mb-2" to="/">
              Registrarse
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className=" btn btn-outline-primary mr-1" to="/">
              Login
            </NavLink>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
