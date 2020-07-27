import React, { useEffect } from "react";
import links from "../../data/links";
import { Link } from "react-router-dom";
import RouterTours from "../../routers/RouterTours";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import "./NavbarTours.scss";

const mostrarMenu = () => {
  $(document).ready(function () {
    //Aqui tomamnos todos lo elemento de la clase menu que tenga un LI y este tenga un elemtno UL
    //se van abrir
    $(".menu .dropbtn:has(.drop-menu)").click(function () {
      if ($(this).hasClass("activado")) {
        //Si el elemento tiene la clase activado
        $(this).removeClass("activado"); // se quita la clase
        $(this).children(".drop-menu").slideUp(300); //El hijo de elemento que contiene la clase .drop-menu se va cerrar.
      } else {
        $(".menu .dropbtn .drop-menu").slideUp(300); //Ocultamos los otros menus
        $(".menu .dropbtn").removeClass("activado");
        $(this).addClass("activado");
        $(this).children(".drop-menu").slideDown(300);
      }
    });

    $(window).resize(function () {
      if ($(document).width() > 480) {
        $(".menu .drop-menu").css({ display: "none" });
      }
    });
  });
};

const NavbarTours = () => {
  useEffect(() => {
    mostrarMenu();
  }, []);
  return (
    <div className="container-nav">
      <nav className="navbar-block">
        <ul className="menu">
          <li className="dropbtn">
            <FontAwesomeIcon icon={["fas", "caret-down"]} className="icon" />
            Cabalgata
            <ul id="menu-despegable" className="drop-menu">
              {links.cabalgata.map((link, id) => (
                <li key={id}>
                  <Link className="link-menu" to={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <ul className="menu">
          <li className="dropbtn">
            <FontAwesomeIcon icon={["fas", "caret-down"]} className="icon" />
            Pesca
            <ul id="menu-despegable" className="drop-menu">
              {links.pesca.map((link, id) => (
                <li key={id}>
                  <Link className="link-menu" to={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <ul className="menu">
          <li className="dropbtn">
            <FontAwesomeIcon icon={["fas", "caret-down"]} className="icon" />
            Surfing
            <ul id="menu-despegable" className="drop-menu">
              {links.surfing.map((link, id) => (
                <li key={id}>
                  <Link className="link-menu" to={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <ul className="menu">
          <li className="dropbtn">
            <FontAwesomeIcon icon={["fas", "caret-down"]} className="icon" />
            Tour de Bote
            <ul id="menu-despegable" className="drop-menu">
              {links.tourBote.map((link, id) => (
                <li key={id}>
                  <Link className="link-menu" to={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      <div className="container-info">
        <RouterTours />
      </div>
    </div>
  );
};

export default NavbarTours;
