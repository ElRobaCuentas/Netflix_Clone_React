import React from 'react'
import database from '../../database/imagenes'

const DetallePelicula = (props) => {

    console.log(props)
    const imagen_pelicula = database.imagenes_peliculas[props.match.params.index];

    return (
        <div>
            <h1>DETALLE DE PELICULA</h1>
            <img src={imagen_pelicula} alt=""/>
        </div>
    )
}

export default DetallePelicula
