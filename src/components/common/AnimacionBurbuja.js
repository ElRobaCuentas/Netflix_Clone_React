import React from 'react'
import PeliculaBurbuja from './PeliculaBurbuja'
import PeliculaMiniPortada from './PeliculaMiniPortada'
import './styles/animacion-burbuja.css'

const AnimacionBurbuja = ({ img }) => {
    return (
        <>
            <div className="container_animacion_burbuja">
                <div className="component1">
                    <PeliculaMiniPortada img={img}/>
                </div>
                <div className="component2">
                    <PeliculaBurbuja img={img}/>
                </div>
            </div> 
        </>
    )
}

export default AnimacionBurbuja
