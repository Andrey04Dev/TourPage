import React from 'react'
import Encabezados from '../../Components/Encabezado/Encabezados'
import CarouselPlaya from '../../Components/Carousel/CarouselPlaya'
import Formulario from '../../Components/Formularios/Formulario'
import FormularioComentario from '../../Components/Formularios/FormularioComentario'

const CabalgataPlaya = () => {
    return (
        <div className='container-fluid'>
            <Encabezados titulo='Bienvenidos al Tour de Playa' info='En este tour disfrutaras del hermoso sonido del mar, donde podrás tener una experiencia única. Me falta mas información'/>
            <CarouselPlaya/>
            <Formulario/>
            <FormularioComentario/>
        </div>
    )
}

export default CabalgataPlaya
