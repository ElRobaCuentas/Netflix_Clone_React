import React, { useEffect, useState } from 'react'
import Wrapper from '../layouts/Wrapper'

const Series = () => {

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
                <h1>Estamso en Series</h1>
            </Wrapper>

        </>
    )

}

export default Series;
