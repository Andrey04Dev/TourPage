import React, { Component } from "react";
import stImagenes from "../../data/imgCabalgata";
import Carousel from "./Carousel";

let newIndex = 0;

export default class CarouselBosque extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagenes: stImagenes.bosque,
      imagen: stImagenes.bosque[0],
    };
  }
  mostrar = () => {
    this.interval = setInterval(() => {
      this.setState({
        imagen: stImagenes.bosque[newIndex++],
      });
      if (newIndex > stImagenes.bosque.length - 1) newIndex = 0;
    }, 3000);
  };
  UNSAFE_componentWillMount() {
    this.mostrar();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  prevImagen = () => {
    newIndex = this.state.imagen.index - 1;
    this.setState({
      imagen: stImagenes.bosque[newIndex],
    });
  };

  nextImagen = () => {
    newIndex = this.state.imagen.index + 1;
    this.setState({
      imagen: stImagenes.bosque[newIndex],
    });
  };

  render() {
    const { imagen } = this.state;
    return (
      <div>
        <Carousel
          src={imagen.src}
          alt={imagen.alt}
          prevImagen={this.prevImagen}
          nextImagen={this.nextImagen}
          disable1={imagen.index === 0}
          disable2={imagen.index === stImagenes.bosque.length - 1}
        />
      </div>
    );
  }
}
