import React from 'react'

//Utilización esta función para que no me de error el iframe del mapa de google mapas 
const Iframe=(props)=> {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }
  let iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.0708670308563!2d-83.13725068569632!3d8.394691000912996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa4f645abc8614d%3A0x185377cc6850da0e!2sCabinas%20carol!5e0!3m2!1ses!2scr!4v1594430063199!5m2!1ses!2scr" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
const Ubicacion = () => {
    return (
        <div className='container-fluid mt-5'>
            <h3 className='text-center'>Nuestra Ubicación</h3>
            <Iframe iframe={iframe}/>
        </div>
    )
}

export default Ubicacion
