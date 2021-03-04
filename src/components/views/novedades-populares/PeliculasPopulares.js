import React from 'react'
import './styles/peliculas-populares.css'
import Imagen from '../../../imagenes/0.png'

const PeliculasPopulares = (props) => {
    const peliculas10 = props.img2
    console.log("este es mio", peliculas10)
    return (
        <>
            <div className="populares">
                <a href="">
                    <img className="imagen1" src={Imagen} alt=""/>
                    <img className="imagen2" src={peliculas10} alt=""/>
                </a>
             </div>     
        </>
    )
}

export default PeliculasPopulares
