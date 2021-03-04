import React from 'react'
import './styles/peliculas-populares.css'
import Imagen from '../../../imagenes/00.png'

const PeliculasPopulares = () => {
    return (
        <>
            <div className="populares">
                <a href="">
                    <img className="imagen1" src={Imagen} alt=""/>
                    <img className="imagen2" src="https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWeYm2SfIiyfaZTCBJkhfRLV6SA00pokFFojbT3SVHEeQER2JFeXR9hYvZvlf5uXQHQtB4AIJoIKYhim98fNTXrrZmkZ.webp?r=929" alt=""/>
                </a>
             </div>     
        </>
    )
}

export default PeliculasPopulares
