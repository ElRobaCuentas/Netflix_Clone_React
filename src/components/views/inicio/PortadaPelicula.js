import React from 'react'
import './styles/portada-pelicula.css'

const PortadaPelicula = (props) => {

    const all_images = props.img;
    return (
        <>
            <div className="padre">
                    <div className="portada_pelicula">
                        <img src={all_images} alt=""/>
                    </div>
            </div>
        </>
    )
}

export default PortadaPelicula;
