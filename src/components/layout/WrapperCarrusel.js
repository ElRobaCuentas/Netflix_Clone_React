import React from 'react'
import PortadaPelicula from '../views/inicio/PortadaPelicula'
import PeliculasPopulares from '../views/novedades-populares/PeliculasPopulares'
import NovedadesPopulares from '../views/NovedadesPopulares'

const WrapperCarrusel = (props) => {
    return (
        <>
            <h1></h1>
            <div className="wrapper">
                <section>
                    {props.children}
                </section>
                
            </div>
        </>
    )
}

export default WrapperCarrusel
