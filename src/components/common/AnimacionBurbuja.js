import React from 'react'
import PeliculaBurbuja from './PeliculaBurbuja'
import PeliculaMiniPortada from './PeliculaMiniPortada'
import './styles/animacion-burbuja.css'

const AnimacionBurbuja = () => {
    return (
        <>
            <div className="container_animacion_burbuja">
                <div className="component1">
                    <PeliculaMiniPortada />
                </div>
                <div className="component2">
                    <PeliculaBurbuja />
                </div>
            </div> 
        </>
    )
}

export default AnimacionBurbuja
