import React from 'react'
import database from '../../database/imagenes'
import styles from './styles/pelicula-miniportada.module.css'

const PeliculaMiniPortada = ({ img }) => {

    return (
        <>
            <div className={styles.container}>
                    <div className={styles.portada_pelicula}>
                        <img src={img} alt=""/>
                    </div>
            </div>
        </>
    )
}

export default PeliculaMiniPortada
