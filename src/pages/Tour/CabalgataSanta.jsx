import React from "react";
import { useParams } from "react-router-dom";
import CarouselCabalgata from "../../Components/Carousel/CarouselSantaClara";
import Encabezado from "../../Components/Encabezado/Encabezados";
import Formulario from "../../Components/Formularios/Formulario";

const CabalgataSanta = () => {
  
  console.log(useParams());
  return (
    <div className="container-fluid">
      <Encabezado
        titulo='Bienvenido al Tour de Cabalgata por Santa Clara'
        info="En este tour usted viajará desde Pavones centro hasta llegar al bosque de ahí disfrutaras de hermosas vistadas y diferentes tipos de animales como osos perezosos, tucanes, congós, aves entre otros animales más, de regreso saldremos por la playa donde usted disfrutará del hermoso atardecer en la playa. En esta trayectoria usted disfrutará de descansos y de nuestros refrigerios. Duración aproximada: 5 a 6 hrs."
      />
      <CarouselCabalgata />
      <Formulario />
    </div>
  );
};

export default CabalgataSanta;
