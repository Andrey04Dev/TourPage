import React from "react";
import links from '../../data/links'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect } from "react";

const mostrarMenu = () => {
  let btn = document.querySelectorAll(".dropbtn");
  let dropMenu = document.querySelectorAll("#menu-despegable");

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      dropMenu[i].classList.toggle("drop-menu");
    });
  }
};

const NavbarVertical = () => {
  useEffect(() => {
    mostrarMenu();
  }, []);
  return (
    <div className="">
      <nav className="navbar-block">
        <div className="dropdown">
          <button type="button" className="dropbtn dropdown-toggle">
            Cabalgata
          </button>
          <div id="menu-despegable" className="drop-menu">
            {links.cabalgata.map((link) => (
              <Link className="link-menu" to={link.url}>
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
            {links.pesca.map((link) => (
              <Link className="link-menu" to={link.url}>
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
            {links.surfing.map((link) => (
              <Link className="link-menu" to={link.url}>
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
            {links.tourBote.map((link) => (
              <Link className="link-menu" to={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarVertical;
