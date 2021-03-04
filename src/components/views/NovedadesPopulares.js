import React from 'react'
import WrapperTwo from '../layout/WrapperTwo'
import Carrusel from './inicio/Carrusel'
import PortadaPelicula from './inicio/PortadaPelicula'
import PeliculasPopulares from './novedades-populares/PeliculasPopulares'
import database from '../../database/imagenes'

const NovedadesPopulares = (props) => {
    
    const img = database.imagenes;
    const img2 = database.imagenesPeliculasPopulares;
    
    return (
        <div>
            <WrapperTwo>
                <h1>10 más populares en el Perú de hoy</h1>
                <div className="wrapper">
                    <section>
                        {
                            img2.map(  all_image => {
                                return <PeliculasPopulares img2={all_image} />
                            } )
                        }
                    </section>
                
                </div>
                <div className="wrapper">
                    <section>
                        {
                            img.map(  all_image => {
                                return <PortadaPelicula img={all_image} />
                            } )
                        }
                    </section>
                
                </div>
            </WrapperTwo>
        </div>
    )
}

export default NovedadesPopulares;
