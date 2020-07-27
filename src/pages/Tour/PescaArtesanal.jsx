import React from "react";
import Encabezados from "../../Components/Encabezado/Encabezados";
import CarouselArtesanal from "../../Components/Carousel/CarouselArtesanal";
import Formulario from "../../Components/Formularios/Formulario";
import FormularioComentario from "../../Components/Formularios/FormularioComentario";

const PescaArtesanal = () => {
  return (
    <div className="container-fluid">
      <Encabezados
        titulo="Bienvenidos al Tour de Pesca Artesanl"
        info="Este tour consiste en pesca mezclada entre ellas la pesca de arrastre, incluye el equipo como cañas y líneas de mano, entre las especies más comunes que podemos ver son: Pargo Rojo, Pargo manchado, wahoo, meros, peces tostados y más. La pesca artesanal se hace de manera responsable."
      />
      <CarouselArtesanal />
      <Formulario />
      <FormularioComentario/>
    </div>
  );
};

export default PescaArtesanal;
