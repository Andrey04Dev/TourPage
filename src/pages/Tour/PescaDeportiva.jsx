import React from 'react'
import Encabezados from '../../Components/Encabezado/Encabezados'
import CarouselDeportiva from '../../Components/Carousel/CarouselDeportiva'
import Formulario from '../../Components/Formularios/Formulario'
import FormularioComentario from '../../Components/Formularios/FormularioComentario'

const PescaDeportiva = () => {
    return (
        <div className='container-fluid'>
            <Encabezados titulo='Bienvenidos al Tour de Pesca de Deportiva' info='Se trata de un deporte sano, dado que los pescadores devuelven al mar la mayoría de los peces que capturan, es una pesca divertida, donde estarás cara a cara con un animal salvaje, sentirás esa adrenalina cuando comiences a enrollar tu caña.'/>
            <CarouselDeportiva/>
            <Formulario/>
            <FormularioComentario/>
        </div>
    )
}

export default PescaDeportiva
