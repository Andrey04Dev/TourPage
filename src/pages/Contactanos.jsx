import React from "react";
import FormularioContacto from "../Components/Formularios/FormularioContacto";
import Ubicacion from "../Components/Ubicacion/Ubicacion";
import { Fragment } from "react";

const Contactanos = () => {
  return (
    <Fragment>
      <FormularioContacto />
      <Ubicacion />
    </Fragment>
  );
};

export default Contactanos;
