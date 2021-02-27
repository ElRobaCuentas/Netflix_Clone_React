import React, { useEffect, useState } from 'react'
import './home.css'
import Menu from './Menu'
import MainHeader from './MainHeader'
import Pro from './Pro'


const Home = () => {

        const [responsive, setResponsive] = useState()
        
        useEffect(() => {
            const fetchData = async () => {
                // const res =  await fetch("https://jsonplaceholder.typicode.com/posts")
                const res =  await fetch("https://mov-arg-2.herokuapp.com/pruebas_informacion")
                const dato = await res.json()
                setResponsive(dato)
            }
            fetchData();
        }, [])
        
        console.log("objetos:", responsive)

    return (
        <>
           <div className="container">
               <header className="header">
                   <div className="menu">
                       <Menu />
                   </div>
                   <div className="main_header">
                       <MainHeader  dato={responsive}/>
                   </div>
               </header>
               <main className="main">
                  {/* <Pro objetosos={responsive}/>  */}
               </main>
           </div>
        </>
        
    )
}

export default Home;