import React, { useEffect, useState } from 'react'
import Carrusel from './inicio/Carrusel'
import MainHeader from './inicio/MainHeader'
import Menu from './inicio/Menu'
import PortadaPelicula from './inicio/PortadaPelicula'
import './styles/inicio.css'


const Inicio = () => {
    // https://jsonplaceholder.typicode.com/posts
    const [jaze, setJaze] = useState([])
    const [response, setResponse] = useState()

    useEffect(() => {
       const datos = async () => {
           const jaz = await fetch("https://jsonplaceholder.typicode.com/posts")
           const dat = await jaz.json();
           setJaze(dat)
       }
       const fetchData = async () => {
           const jaz = await fetch("https://mov-arg-2.herokuapp.com/pruebas_informacion")
           const dat = await jaz.json();
           setResponse(dat)
       }
        datos();
        fetchData();
    }, [])
    
    console.log("la funcion es:", jaze)

    return (
        <>
           <div className="container">
               <header className="header">
                   <div className="menu">
                       <Menu />
                   </div>
                   <div className="main_header">
                       <MainHeader  dato={response}/>
                   </div>
               </header>
               <main className="main">
                       <Carrusel />
               </main>
           </div>
        </>
        
    )
}

export default Inicio;