import React, { useEffect, useState } from 'react'
import Wrapper from '../layout/Wrapper'
import WrapperCarrusel from '../layout/WrapperCarrusel'
import Carrusel from './inicio/Carrusel'
import MainHeader from './inicio/MainHeader'
import Menu from './inicio/Menu'
import PortadaPelicula from './inicio/PortadaPelicula'
import './styles/inicio.css'


const Inicio = () => {
    const [response, setResponse] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const jaz = await fetch("https://mov-arg-2.herokuapp.com/pruebas_informacion")
            const dat = await jaz.json();
            setResponse(dat)
        }
        fetchData();
    }, [])

    console.log("la funcion es:", response)

    return (
        <>
            <Wrapper dato={response}>
                {/* <Carrusel titulo={"Mi lista"} /> */}
                <WrapperCarrusel>
                                        
                </WrapperCarrusel>
            </Wrapper>
        </>

    )
}

export default Inicio;


        //    <div className="container">
        //        <header className="header">
        //            <div className="menu">
        //                <Menu />
        //            </div>
        //            <div className="main_header">
        //                <MainHeader  dato={response}/>
        //            </div>
        //        </header>
        //        <main className="main">
        //                <Carrusel titulo={"Mi lista"}/>
        //                <Carrusel titulo={"Populares"}/>
        //                <Carrusel titulo={"Series"}/>
        //                <Carrusel titulo={"Continuar viendo"}/>
        //        </main>
        //    </div>