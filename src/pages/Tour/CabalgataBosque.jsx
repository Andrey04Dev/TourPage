import React from "react";
import Encabezados from "../../Components/Encabezado/Encabezados";
import CarouselBosque from "../../Components/Carousel/CarouselBosque";
import Formulario from "../../Components/Formularios/Formulario";
import FormularioComentario from "../../Components/Formularios/FormularioComentario";

const CabalgataBosque = () => {
  return (
    <div className="container-fluid">
      <Encabezados
        titulo='Bienvenido al Tour de Cabalgata por el Bosque'
        info="En este tour usted viajará desde Pavones centro hasta la montaña viendo vida silvestre y animales de la región hasta llegar al pueblo indígena Altamira, de regreso pasaremos por el Rio donde podremos observar una pequeña cascada donde podrá descansar, disfrutar del rio y relajarse, además de darse un delicioso baño. Cuenta con un refrigerio incluido. Duración aproximada:  4 a 5 hrs."
      />
      <CarouselBosque />
      <Formulario />

      <FormularioComentario/>
    </div>
  );
};

export default CabalgataBosque;
