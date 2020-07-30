import React, { Component } from "react";
import stImagenes from "../../data/imgCabalgata";
import Carousel from "./Carousel";

let newIndex = 0;
export default class CarouselPlaya extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagenes: stImagenes.playa,
      imagen: stImagenes.playa[0],
    };
  }
  mostrar = () => {
    this.interval = setInterval(() => {
      this.setState({
        imagen: stImagenes.playa[newIndex++],
      });
      if (newIndex > stImagenes.playa.length - 1) newIndex = 0;
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
      imagen: stImagenes.playa[newIndex],
    });
  };
  nextImagen = () => {
    newIndex = this.state.imagen.index + 1;
    this.setState({
      imagen: stImagenes.playa[newIndex],
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
          disable2={imagen.index > stImagenes.playa.length - 1}
        />
      </div>
    );
  }
}
