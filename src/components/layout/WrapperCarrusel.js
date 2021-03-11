import React from 'react'
import PortadaPelicula from '../views/inicio/PortadaPelicula'
import PeliculasPopulares from '../views/novedades-populares/PeliculasPopulares'
import NovedadesPopulares from '../views/NovedadesPopulares'
import './styles/wrapper-carrusel.css'

const WrapperCarrusel = (props) => {
    return (
        <>
            <h1>Peliculas</h1>
            <div className="wrapper">
                <section>
                    {props.children}
                </section>
                
            </div>
        </>
    )
}

export default WrapperCarrusel
