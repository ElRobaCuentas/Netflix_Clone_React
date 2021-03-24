import React from 'react'
import PeliculaMiniPortada from './PeliculaMiniPortada'
import database from '../../database/imagenes'
import './styles/pelicula-burbuja.css'

const PeliculaBurbuja = ({ img }) => {

    return (
        <>
            <div className="container_burbuja2">
                <div className="portada_pelicula2">
                    <img src={img} alt=""/>
                </div> 
                <p>Pelicula de mucho terror</p> 
                <p>Pelicula de mucho terror</p> 
                <p>Pelicula de mucho terror</p> 
                <p>Pelicula de mucho terror</p> 
                <p>Pelicula de mucho terror</p> 
            </div> 
        </>
    )
}

export default PeliculaBurbuja
