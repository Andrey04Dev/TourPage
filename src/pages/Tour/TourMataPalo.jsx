import React from 'react'
import Encabezados from '../../Components/Encabezado/Encabezados'
import CarouselTourMP from '../../Components/Carousel/CarouselTourMP'
import Formulario from '../../Components/Formularios/Formulario'
import FormularioComentario from '../../Components/Formularios/FormularioComentario'

const TourMataPalo = () => {
    return (
        <div className='container-fluid'>
            <Encabezados titulo='Tour a Mata Palo' info='Nesecito información de esto.'/>
            <CarouselTourMP/>
            <Formulario/>
            <FormularioComentario/>
        </div>
    )
}

export default TourMataPalo
