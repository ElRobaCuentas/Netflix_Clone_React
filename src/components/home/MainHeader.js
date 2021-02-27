import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MainHeader = (props) => {

        const pelicula = props.dato ? props.dato[4] : {};

        console.log("esta es la:", pelicula);
    return (
        <>
            <div className="main_header_body">
                <div className="detalle">
                     <img src={pelicula.img_titulo_pelicula} alt=""/>
                     <p> {pelicula.descripcion_pelicula}</p> 
                     <div className="botones">
                            <div className="boton_reproducir">
                                <i class="fas fa-play"></i>                                                                                                                                                                      
                                <Link to="/movie">Reproducir</Link>
                            </div>
                            <div className="boton_informacion">
                                <i class="far fa-question-circle"></i>
                                <a href="">Más Información</a>
                            </div>
                     </div>
                </div>
            </div>
        </>
    )
}


export default MainHeader;