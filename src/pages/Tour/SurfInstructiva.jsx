import React from 'react'
import Encabezados from '../../Components/Encabezado/Encabezados'
import CarouselInstructoria from '../../Components/Carousel/CarouselInstructoria'
import Formulario from '../../Components/Formularios/Formulario'
import FormularioComentario from '../../Components/Formularios/FormularioComentario'

const SurfInstructiva = () => {
    return (
        <div className='container-fluid'>
            <Encabezados titulo='Bievenidos a las Clases de Surfing' info='Las lecciones de surf en Pavones, le ofrecen la mejor instrucción, de mejor calidad de Pavones, Los Sueños y la zona de Surfear la segunda ola izquierda en el mundo. Con la mejor ola para aprender del país – Pavones Costa Rica, y los instructores más respetados de la zona, Las lecciones de surf Pavones, le ofrecen la mejor instrucción, de mejor calidad. La Seguridad y la preparación son los elementos más importantes para una buena instrucción de surf. Por eso cada lección de surf en Pavones comienza con instrucciones básicas de surf, la seguridad en el agua, lo que significa “surfear”, la dinámica de las olas, cómo remar, la posición que hay que tener en la ola, estiramientos y cómo levantarse en la tabla. Transporte únicamente en Pavones, Punta banco y Pilón. Instructor de surf bilingüe' />
            <CarouselInstructoria/>
            <Formulario/>
            <FormularioComentario/>
        </div>
    )
}

export default SurfInstructiva
