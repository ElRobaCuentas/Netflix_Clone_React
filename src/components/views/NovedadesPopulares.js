import React from 'react'
import WrapperTwo from '../layout/WrapperTwo'
import Carrusel from './inicio/Carrusel'
import PortadaPelicula from './inicio/PortadaPelicula'
import PeliculasPopulares from './novedades-populares/PeliculasPopulares'

const NovedadesPopulares = () => {
    
    return (
        <div>
            <WrapperTwo>
                <h1>10 más populares en el Perú de hoy</h1>
                <PeliculasPopulares /> 
            </WrapperTwo>
        </div>
    )
}

export default NovedadesPopulares;

{/* <Carrusel /> */}