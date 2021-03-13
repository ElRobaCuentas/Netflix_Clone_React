import React, { useEffect, useState } from 'react'
import Wrapper from '../layouts/Wrapper'

const Peliculas = () => {

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
            <div className="container-peliculas">
                <Wrapper data={response}>
                    <h1>ESTOY EN PELICULAS</h1>
                </Wrapper>
            </div>
        </>
    )
}

export default Peliculas
