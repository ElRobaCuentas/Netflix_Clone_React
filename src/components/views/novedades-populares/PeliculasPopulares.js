import React, { useEffect } from 'react'
import './styles/peliculas-populares.css'
// import Imagen from '../../../imagenes/0.png'

const PeliculasPopulares = (props) => {
    const peliculas10 = props.img2;
    const numero = props.num;

    useEffect(() => {
        // let $caja = document.querySelector(".populares")
        // let $caja2 = document.querySelector(".cajaFloat")
        let $caja = document.getElementById(`populares${numero}`)
        let $caja2 = document.getElementById(`cajaFloat${numero}`)
        $caja.addEventListener("mouseover", () => {
            // console.log("aqui", $caja)
            // console.log("aqui2", $caja2)
            $caja2.style.display = "block"
        })
        $caja.addEventListener("mouseout", () => {
            $caja2.style.display = "none"
        })
    
        console.log("flota", $caja)
        console.log("flota2", $caja2)
    }, [])

    return (
        <>  
            <div className="populares" id={`populares${numero}`} >
                <a href="">
                    <img className="imagen1" src="/imagenes/0.png" alt=""/>
                    <img className="imagen2" src={peliculas10} alt=""/>
                </a>
                <div className="cajaFloat" id={`cajaFloat${numero}`}>{numero}</div> 
             </div>      
        </>
    )
}

export default PeliculasPopulares
