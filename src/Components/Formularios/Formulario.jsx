import React, { useState } from "react";
import { useForm } from "react-hook-form";
import $ from 'jquery'
import './Formulario.scss'

const Formulario = () => {
  const { register, errors, handleSubmit } = useForm();
  const [info, setInfo] = useState([]);
  const [checked, setChecked] = useState(false);
  const [numeros] = useState(['',1, 2, 3, 4, 5]);

  const check = () => {
    let si = document.querySelector("#si");
    let cantidad = document.querySelector("#cantidad");

    if (si.checked)
      cantidad.readOnly = false;
    else
      cantidad.readOnly = true;
  };

  const onSubmit = (data, e) => {
    console.log(data);
    setInfo([...info, data]);
    e.target.reset();
  };
  const mostrarFormulario = () => {
    $(document).ready(function(){
      $('.formulario').toggleClass('active-form')
    })
  };

  return (
    <div>
      <div className="container-center">
        <h2>¿Te gustaría Reservar este tour?</h2>
        <button
          id="btn-mostrar"
          type="button"
          className="btn-mostrar"
          onClick={mostrarFormulario}
        >
          Haz click aqui!
        </button>
      </div>
        <form
          name="formReservar"
          action=""
          method="get"
          className="formulario"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-center">Formulario de Reservación</h2>
          <div className="row">
            <div className="col-6">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Nombre Completo"
                ref={register({
                  required: { value: true, message: "Espacio requerido" },
                  minLength: {
                    value: 8,
                    message: "Debe contener mínimo 8 letras",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Escriba solo letras",
                  },
                })}
              />
              <span className="text-danger d-block mb-2">
                {errors?.name?.message}
              </span>
              <label htmlFor="nPasaporte">
                Número de Pasarte o Identificación:
              </label>
              <input
                type="text"
                name="nPasaporte"
                id="nPasaporte"
                className="form-control"
                placeholder="Número completo de Pasaporte o Identificación"
                ref={register({
                  required: { value: true, message: "Espacio requerido" },
                  pattern: {
                    value: /^[A-Za-z0-9]+$/i,
                    message:
                      "No escriba signos de admiración,interrogación, exclamción",
                  },
                })}
              />
              <span className="text-danger d-block mb-2">
                {errors?.nPasaporte?.message}
              </span>
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="text"
                name="telefono"
                id="telefono"
                className="form-control"
                placeholder="Ejemplo : +506 87577588"
                ref={register({
                  required: { value: true, message: "Espacio requerido" },
                  pattern: {
                    value: /^[0-9]+$/i,
                    message:"No escriba signos de admiración,interrogación, exclamción o letras"
                  },
                })}
              />
              <span className="text-danger d-block mb-2">
                {errors?.telefono?.message}
              </span>
            </div>
            <div className="col-6">
              <label htmlFor="persona">Número de Persona:</label>
              <select
                name="persona"
                id="persona"
                className="form-control"
                ref={register({
                  required: { value:true, message: "Escoja una opción" },
                })}
              >
                {numeros.map((numero) => (
                  <option key={numero} value={numero}>
                    {numero}
                  </option>
                ))}
              </select>
              <span className="text-danger d-block">
                {errors?.persona?.message}
              </span>
              <label htmlFor="fecha">Fecha del Tour</label>
              <input
                type="date"
                name="fecha"
                id="fecha"
                className="form-control"
                ref={register({
                  required: {
                    value: true,
                    message: "Escoja una fecha por favor.",
                  },
                })}
              />
              <span className="text-danger d-block mb-2">
                {errors?.fecha?.message}
              </span>
              <label htmlFor="" className="form-check-label">
                Incluiran niños
              </label>
              <br />
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  name="si"
                  id="si"
                  className="form-check-input"
                  onClick={check}
                  onChange={() => setChecked(!checked)}
                  ref={register({
                    required: { value: true, message: "Espacio requerido" },
                  })}
                />
                <label htmlFor="si" className="form-check-label mr-3">
                  Sí
                </label>
                <span className="text-danger d-block mr-2">
                  {errors?.si?.message}
                </span>
              </div>
              <br />
              <label htmlFor="cantidad" className="form-check-label mr-3">
                Cantidad de niños
              </label>
              <input
                type="text"
                name="cantidad"
                id="cantidad"
                className="form-control"
                readOnly
                ref={register({
                  required: { value: true, message: "Espacio requerido, por favor darle SI al incluir niños" },
                  maxLength: {value: 1, message:'Debe escribir númerio del 1-5'},
                  pattern: {
                    value: /^[0-9]+$/i,
                    message:
                      "No escriba signos de admiración,interrogación, exclamción o letras",
                  },
                  
                })}
              />
              <span className="text-danger d-block">
                {errors?.cantidad?.message}
              </span>
            </div>
          </div>
          <button className="btn btn-primary float-right mt-2" type="submit">
            Reservar
          </button>
        </form>
    </div>
  );
};

export default Formulario;
