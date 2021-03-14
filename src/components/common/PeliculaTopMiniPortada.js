import React from 'react'
import database from '../../database/imagenes'
import styles from './styles/pelicula-top-miniportada.module.css'

const PeliculaTopMiniPortada = () => {

    const img = database.imagenes_Peliculas_Populares[0];

    return (
        <>  
            <div className={styles.container}>
                <a href="">
                    <img className={styles.img1} src="/assets/img/0.png" alt=""/>
                    <img className={styles.img2} src={img} alt=""/>
                </a>
             </div>      
        </>
    )
}

export default PeliculaTopMiniPortada
