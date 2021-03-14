import React, { useEffect, useState } from 'react'
import AnimacionBurbuja from '../common/AnimacionBurbuja'
import PeliculaMiniPortada from '../common/PeliculaMiniPortada'
import PeliculaTopMiniPortada from '../common/PeliculaTopMiniPortada'
import Carrusel from '../layouts/Carrusel'
import Wrapper from '../layouts/Wrapper'
import './styles/home.css'

const Home = () => {

    const [response, setResponse] = useState()

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
                    {/* <PeliculaMiniPortada /> */}
                    {/* <PeliculaTopMiniPortada /> */}
                    {/* <AnimacionBurbuja /> */}
                    <Carrusel margin="0px"/>
                    <Carrusel margin="60px"/>
                    <Carrusel margin="100px"/>
                </Wrapper>
            </div>
        </>
    )
}

export default Home
