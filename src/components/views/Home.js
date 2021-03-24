import React, { useEffect, useState } from 'react'
import AnimacionBurbuja from '../common/AnimacionBurbuja'
import PeliculaMiniPortada from '../common/PeliculaMiniPortada'
import PeliculaTopMiniPortada from '../common/PeliculaTopMiniPortada'
import Carrusel from '../layouts/Carrusel'
import Wrapper from '../layouts/Wrapper'
import database from '../../database/imagenes'
import './styles/home.css'
import { Link } from 'react-router-dom'

const Home = () => {

    const [response, setResponse] = useState()
    const imagenes_peliculas = database.imagenes_peliculas;
    console.log(imagenes_peliculas)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://mov-arg-2.herokuapp.com/pruebas_informacion")
            const dato = await res.json();
            setResponse(dato)
        }
        fetchData();
    }, [])


    return (
        <>
            <div className="container-home">
                <Wrapper data={response}>
                    <h1>ESTOY EN HOME</h1><br/>
                    <Carrusel margin="0px">
                        {
                            imagenes_peliculas.map( (img, index) => {
                                return (
                                    /* RUTA DINAMICA  */
                                    <Link key={index} to={`/browse/url/${index}`}>
                                        <AnimacionBurbuja img={img}/>
                                    </Link>
                                )
                            })
                        }
                    </Carrusel>
                    {/* <Carrusel margin="60px"/>
                    <Carrusel margin="100px"/> */}
                </Wrapper>
            </div>
        </>
    )
}

export default Home
