import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import Modal from 'react-modal'
import './Formulario.css'
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
Modal.setAppElement("#modal-login");
//Empieza el componente Formulario Login
const FormularioLogin = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const [user, setUser] = useState([]);

  const onSubmit = (data, e) => {
    //Seteamos los usuarios para guardarlo  y despues comprobarlo
    setUser([...user, data]);
    e.target.reset();
    console.log(data);
  };
  //Llamado de funciones con useEffect de Hooks
  useEffect(() => {
    // ocultar()
  });
  return ReactDOM.createPortal(
    <Modal
    id='modalLogin'
      isOpen={props.mostrar}
      onRequestClose={props.cerrar}
      style={customStyles}
    >
      <div className="container-fluid">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <FontAwesomeIcon icon={["fas", "user-lock"]} className="mr-2" />
              Login
            </h5>
            <button className="close" onClick={props.cerrar}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="usuario">Usuario o correo:</label>
                  <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    className="form-control"
                    placeholder='Usuario o correo'
                    ref={register({
                      required: { value: true, message: "Espacio requerido" },
                    })}
                  />
                  <span
                    className="text-danger d-block mb-2"
                  >
                    {errors?.usuario?.message}
                  </span>
                  <label htmlFor="nombre">Contraseña:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='...........'
                    className="form-control"
                    ref={register({
                      required: { value: true, message: "Espacio requerido" },
                    })}
                  />
                  <span
                    className="text-danger d-block mb-2"
                  >
                    {errors?.password?.message}
                  </span>
                </div>
              </div>
              <div className="modal-footer">
            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>
          </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>,
    document.querySelector("#modal-login")
  );
};
export default FormularioLogin;
