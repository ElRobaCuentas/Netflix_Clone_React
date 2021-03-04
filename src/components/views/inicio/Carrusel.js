import React from 'react'
import PortadaPelicula from './PortadaPelicula'
import './styles/carrusel.css'
import imagenes from '../../../database/imagenes'

const Carrusel = (props) => {

    const titles = props.titulo;
    const img = imagenes;

    return (
        <>
            <h1> {titles}</h1>
            <div className="wrapper">
                <section>
                    {
                        img.map(  all_image => {
                            return <PortadaPelicula img={all_image} />
                        } )
                    }
                </section>
                
            </div>
        </>
    )
}

export default Carrusel
