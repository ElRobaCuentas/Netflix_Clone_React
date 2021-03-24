import React from 'react'
import { Link } from 'react-router-dom';
import './styles/main-header.css'

const MainHeader = (props) => {

    const randomico = (a, b) => {
        return Math.round(Math.random()*(b-a)+parseInt(a));
    }

    const pelicula = props.data ? props.data[randomico(0,4)] : {};
    const background = props.setFondo;
    background(pelicula.img_pelicula);

    return (
        <>
            <div className="main_header_body">
                <div className="detalle">
                     <img src={pelicula.img_titulo_pelicula} alt=""/>
                     <p> {pelicula.descripcion_pelicula}</p> 
                     <div className="botones">
                            <div className="boton_reproducir">
                                <i className="fas fa-play"></i>                                                                                                                                                                      
                                <Link to="/movie">Reproducir</Link>
                            </div>
                            <div className="boton_informacion">
                                <i className="far fa-question-circle"></i>
                                <a href="">Más Información</a>
                            </div>
                     </div>
                </div>
            </div>
        </>
    )
}


export default MainHeader;