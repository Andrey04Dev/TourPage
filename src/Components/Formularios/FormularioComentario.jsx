import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import $ from 'jquery'
import MostrarComentario from '../MostrarComentario/MostrarComentario'
import imagen from '../../assets/img/Tours/pesca.jpg'
import './Formulario.scss'

const FormularioComentario = () => {
    const {register, errors, handleSubmit} = useForm()
    const [comentarios, setComentarios] = useState([])

    const onSubmit=(data, e)=>{
        e.preventDefault()
        setComentarios([...comentarios,data])
        console.log(comentarios);
        e.target.reset()
    }

    const mostrarForm =()=>{
        $(document).ready(()=>{
            $('.formulario').show()
        })
    }
    return (
        <Fragment>
        <div className='container-coment container-fluid'>
            <h3 className='text-center'>Comentanos que te parecio el tour</h3>
            <form action="" id='formComment' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="comentario">Escribe tu comentario:</label>
                <textarea name="comentario" id="comentario" className='form-control-plaintext'
                ref={
                    register({
                        required:{value: true, message:'Escriba un comentario antes que aprentar el boton'}
                    })
                }
                />
                <span className=' text-danger d-block mb-2'>
                    { errors?.comentario?.message}
                </span>
                <button type='submit'className="btn btn-primary float-right">Comentar</button>
            </form>
        </div>
        <ul className="list-unstyled">
            {
                comentarios.map((comentario,id) =>(
                    <MostrarComentario key={id} imagen={imagen} nombre='Nombre de la persona' comentario={comentario.comentario} handleFormulario={mostrarForm}/>
                ))
            }
            
        </ul>
        </Fragment>
    )
}

export default FormularioComentario
