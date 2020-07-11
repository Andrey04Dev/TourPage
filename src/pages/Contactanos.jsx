import React from "react";
import FormularioContacto from "../Components/Formularios/FormularioContacto";
import ContactosInfo from "../Components/Contactos/ContactosInfo";
import Ubicacion from "../Components/Ubicacion/Ubicacion";

const Contactanos = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <FormularioContacto />
        <ContactosInfo />
        <Ubicacion />
      </div>
    </div>
  );
};

export default Contactanos;
