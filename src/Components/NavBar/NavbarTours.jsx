import React, { Fragment,useEffect } from "react";
import links from '../../data/links'
import { Link } from "react-router-dom";
import "./Navbar.css";

const mostrarMenu = () => {
  let btn = document.querySelectorAll(".dropbtn");
  let dropMenu = document.querySelectorAll("#menu-despegable");

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      dropMenu[i].classList.toggle("drop-menu");
    });
  }
};

const NavbarTours = () => {
  useEffect(() => {
    mostrarMenu();
  }, []);
  return (
    <Fragment>
      <nav className="navbar-block">
        <div className="dropdown">
          <button type="button" className="dropbtn dropdown-toggle">
            Cabalgata
          </button>
          <div id="menu-despegable" className="drop-menu">
            {links.cabalgata.map((link,id) => (
              <Link key={id} className="link-menu" to={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="dropdown">
          <button type="button" className="dropbtn dropdown-toggle">
            Pesca
          </button>
          <div id="menu-despegable" className="drop-menu">
            {links.pesca.map((link,id) => (
              <Link key={id} className="link-menu" to={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="dropdown">
          <button type="button" className="dropbtn dropdown-toggle">
            Surfing
          </button>
          <div id="menu-despegable" className="drop-menu">
            {links.surfing.map((link,id) => (
              <Link key={id} className="link-menu" to={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="dropdown">
          <button type="button" className="dropbtn dropdown-toggle">
            Tour de Bote
          </button>
          <div id="menu-despegable" className="drop-menu">
            {links.tourBote.map((link,id) => (
              <Link key={id} className="link-menu" to={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      </Fragment>
  );
};

export default NavbarTours;
