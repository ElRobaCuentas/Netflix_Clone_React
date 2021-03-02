import React from 'react'
import PortadaPelicula from './PortadaPelicula'
import './styles/carrusel.css'
import imagenes from '../../../database/imagenes'

const Carrusel = () => {

    const img = imagenes;

    return (
        <>
            <h1>Mi lista</h1>
            <div className="wrapper">
                <section>
                    {
                        img.map(  all_image => {
                            return <PortadaPelicula img={all_image} /> 
                        } )
                    }

                    {/* <a href="#section2" className="izquierda">›</a> */}
                    {/* <div className="item">
                        <img src="https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp" alt="Describe Image" />
                    </div> */}
                    {/* <a href="#section2" className="derecha">›</a> */}
                </section>
                
            </div>
        </>
    )
}

export default Carrusel
