import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ContactosInfo from "../Contactos/ContactosInfo";

const FormularioContacto = () => {
  const [informes, setInformes] = useState([]);
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    //Guardamos todos los datos de formulario en la variable informe
    setInformes([...informes, data]);
    //Reseteamos el formulario.
    e.target.reset();
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-6">
          <h3 className="text-center">Formulario de Contactanos</h3>
          <form action="" name="formContacto" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="correo">Correo:</label>
            <input
              type="text"
              name="correo"
              id="correo"
              className="form-control"
              ref={register({
                required: { value: true, message: "Espacio requerido" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Su correo debe contener un "@".',
                },
              })}
            />
            <span className="text-danger d-block mb-2">
              {errors?.correo?.message}
            </span>
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="text"
              name="telefono"
              id="telefono"
              className="form-control"
              ref={register({
                required: { value: true, message: "Espacio requerido" },
                pattern: {
                  value: /^[0-9]+$/i,
                  message:
                    "No escriba signos de admiración,interrogación, exclamción o letras",
                },
              })}
            />
            <span className="text-danger d-block mb-2">
              {errors?.telefono?.message}
            </span>
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              className="form-control-plaintext"
              name="descripcion"
              id="descripcion"
              placeholder="Describa su información"
              ref={register({
                required: { value: true, message: "Espacio requerido" },
              })}
            />
            <span className="text-danger d-block mb-2">
              {errors?.descripcion?.message}
            </span>
            <button type="submit" className="btn btn-primary float-right">
              Enviar
            </button>
          </form>
          <div className="container mt-5">
            <h5>La informacion que le llegaria al correo a ustedes:</h5>
            {informes.map((informe) => (
              <p>
                {`Correo es: ` + informe.correo}-
                {`El teléfono: ` + informe.telefono}-
                {`La descripción es: ` + informe.descripcion}
              </p>
            ))}
          </div>
        </div>
        <ContactosInfo/>
      </div>
    </div>
  );
};

export default FormularioContacto;
