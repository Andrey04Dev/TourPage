import React, { Component } from "react";
import stImagenes from "../../data/imgCabalgata";
import "./Carousel.css";
import Carousel from "./Carousel";

//Iniciamos el contador de las Imagenes
let newIndex = 0;
export default class CarouselSantaClara extends Component {
  //Creamos el constructor de los Props
  constructor(props) {
    super(props);
    this.state = {
      // Seteamos objetos que llamos arriba en 2 diferentes formas, 1 para cambiar el index en el objecto real y la otra
      // para manejar el index
      imagenes: stImagenes.santaClara,
      imagen: stImagenes.santaClara[0]
    };
  }
  //Función  para que el carousel se me mueva cierto tiempo.
  mostrar = () => {
    this.interval = setInterval(() => {
      this.setState({
        imagen: stImagenes.santaClara[newIndex++],
      });
      if (newIndex > stImagenes.santaClara.length - 1) newIndex = 0;
    }, 3000);
  };

  //Hacemos que el carousel se mueva dinámicamente.
  componentDidMount() {
    this.mostrar();
  }
  //Limpiamos el método interval en el DOM
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  //Función para correr un imagen hacia atrás cuando es necesaria
  prevImagen = () => {
    newIndex = this.state.imagen.index - 1;
    this.setState({
      imagen: stImagenes.santaClara[newIndex],
    });
  };
  //Función para correr un imagen hacia adelante cuando es necesaria
  nextImagen = () => {
    newIndex = this.state.imagen.index + 1;
    this.setState({
      imagen: stImagenes.santaClara[newIndex],
    });
  };
  render() {
    // Seteamos el estamos para poder agarrar las variables que necesitamos dentro del objecto stImagenes
    const { imagen } = this.state;
    return (
      // Llamamos al componente Carousel para crear nuestro nuevo carousel.
      <Carousel
        src={imagen.src}
        alt={imagen.alt}
        prevImagen={this.prevImagen}
        nextImagen={this.nextImagen}
        disable1={imagen.index === 0}
        disable2={imagen.index === stImagenes.santaClara.length - 1}
      />
    );
  }
}