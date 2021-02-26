import React, { useEffect, useState } from 'react'
import './home.css'
import Menu from './Menu'
import MainHeader from './MainHeader'
import Pro from './Pro'


const Home = () => {

    const [response, setResponse] = useState()

    // const apiCall = databaUsuario()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://mov-arg-2.herokuapp.com/pruebas_informacion")
            const data = await res.json()
            setResponse(data);
        }
        fetchData();
    }, [])

    console.log("datos de mi api:", response);

    return (
        <>
           <div className="container">
               <header className="header">
                   <div className="menu">
                       <Menu />
                   </div>
                   <div className="main_header">
                       <MainHeader dato={response} />
                   </div>
               </header>
               <main className="main">
                  <Pro /> 
               </main>
           </div>
        </>
        
    )
}

export default Home;