import React from 'react'
import styles  from './styles/carrusel.module.css'
import AnimacionBurbuja from '../common/AnimacionBurbuja'

const Carrusel = (props) => {

    const margen = props.margin;
    console.log("sdas",margen);

    return (
        <>
            <div className={styles.flotar_carrusel} style={{bottom: margen}}>
                <h3>Peliculas</h3>
                <div className={styles.container_burbuja}>
                        <AnimacionBurbuja />
                        <AnimacionBurbuja />
                        <AnimacionBurbuja />
                        <AnimacionBurbuja />
                        <AnimacionBurbuja />
                        <AnimacionBurbuja />
                        <AnimacionBurbuja />
                </div> 
            </div>
        </>
    )
}

export default Carrusel
