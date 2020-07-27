import React from 'react'
import Encabezados from '../../Components/Encabezado/Encabezados'
import CarouselPuntaBurica from '../../Components/Carousel/CarouselPuntaBurica'
import Formulario from '../../Components/Formularios/Formulario'
import FormularioComentario from '../../Components/Formularios/FormularioComentario'

const TourPuntaBurica = () => {
    return (
        <div className='container-fluid'>
            <Encabezados titulo='Tour a Punta Burica' info='Necesito Información de esto tambíen'/>
            <CarouselPuntaBurica/>
            <Formulario/>
            <FormularioComentario/>
        </div>
    )
}

export default TourPuntaBurica
