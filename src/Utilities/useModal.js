import { useState } from 'react'

//Componente funcional de utilidades para mostrar el modal
const useModal = () => {
    // Declaramos la vairables para manejar el estado del modal
    const [isShowing,setIsShowing] = useState(false);

    //Hacemos la función para mostrar o ocultar el modal 
    const toogle =()=>{
        setIsShowing(!isShowing)
    }
    //Llamamos tanto la variables como la función
    return (
        isShowing,toogle
    )
}

export default useModal
