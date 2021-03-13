import React, { useEffect, useState } from 'react'
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
            <Wrapper
                data={response}
            >
                <h1>HOME</h1>
            </Wrapper>

        </>
    )
}

export default Home
