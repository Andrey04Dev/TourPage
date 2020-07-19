import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

//Estilos de modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    border: "none",
    borderRadius: "10px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

//Para que abra en el modal y se quite el error de redenrización
Modal.setAppElement("#modal-registrar");
const FormularioRegistrarse = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const [user, setUser] = useState([]);
  //   const [paises,setPaises] = useState([]);

  const onSubmit = (data, e) => {
    //Seteamos los usuarios para guardarlo  y despues comprobarlo
    setUser([...user, data]);
    e.target.reset();
  };

  //   const obtenerPaises = async() => {
  //     const data = await fetch('https://restcountries.eu/rest/v2/all');
  //     const texto = await data.json();
  //     console.log(texto);
  //     setPaises(texto)
  //     console.log(paises);

  //   };

  useEffect(() => {
    // obtenerPaises();
  }, []);
  return ReactDOM.createPortal(
    <Modal
      isOpen={props.mostrar}
      onRequestClose={props.cerrar}
      style={customStyles}
    >
      <div className="container-fluid">
      <div className="modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <FontAwesomeIcon icon={["fas", "clipboard"]} className="mr-2" />
              Registrarse
            </h5>
            <button className="close" onClick={props.cerrar}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="file">Selecione su foto de perfil:</label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="form-control-file"
                    ref={register({
                      required: { value: true, message: "Espacio requerido" },
                    })}
                  />
                  <span className="text-danger d-block mb-2">
                    {errors?.file?.message}
                  </span>
                  <label htmlFor="id">Cédula o Pasaporte:</label>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    className="form-control"
                    placeholder="Eje: 604080304"
                    ref={register({
                      required: { value: true, message: "Espacio requerido" },
                    })}
                  />
                  <span className="text-danger d-block mb-2">
                    {errors?.id?.message}
                  </span>
                  <label htmlFor="nombre">Nombre Completo:</label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="form-control"
                    placeholder="Ejem: Johana Zuñiga López"
                    ref={register({
                      required: { value: true, message: "Espacio requerido" },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Escriba solo letras",
                      },
                    })}
                  />
                  <span className="text-danger d-block mb-2">
                    {errors?.nombre?.message}
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
                        message:
                          "No escriba signos de admiración,interrogación, exclamción o letras",
                      },
                    })}
                  />
                  <span className="text-danger d-block mb-2">
                    {errors?.telefono?.message}
                  </span>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email">Correo:</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Ejem: ashasjd@gmail.com"
                    ref={register({
                      required: { value: true, message: "Espacio requerido" },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Su correo debe contener un "@".',
                      },
                    })}
                  />
                  <span className="text-danger  d-block mb-2">
                    {errors?.email?.message}
                  </span>
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ejem: Ad32he#s23"
                    className="form-control"
                    ref={register({
                      required: { value: true, message: "Espacio requerido" },
                      minLength: {
                        value: 8,
                        message: "La contraseña debe ser mínimo 8, máximo 16",
                      },
                      maxLength: {
                        value: 16,
                        message: "La contraseña debe ser mínimo 8, máximo 16",
                      },
                    })}
                  />
                  <span className="text-danger d-block mb-2">
                    {errors?.password?.message}
                  </span>
                  <label htmlFor="repetPassword">Confirmar contraseña:</label>
                  <input
                    type="password"
                    name="repetPassword"
                    id="repetPassword"
                    className="form-control"
                    placeholder="Ejem: Ad32he#s23"
                    ref={register({
                      required: { value: true, message: "Espacio requerido" },
                      minLength: {
                        value: 8,
                        message: "La contraseña debe ser mínimo 8 carácteres",
                      },
                      maxLength: {
                        value: 16,
                        message: "La contraseña debe ser máximo 16 carácteres",
                      },
                    })}
                  />
                  <span className="text-danger d-block mb-2">
                    {errors?.repetPassword?.message}
                  </span>
                  <label htmlFor="pais">País:</label>
                  <select name="pais" id="pais"></select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary mt-3">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </Modal>,
    document.querySelector("#modal-registrar")
  );
};

export default FormularioRegistrarse;
