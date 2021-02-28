import React, { useEffect, useState } from 'react'
import './home.css'
import Menu from './Menu'
import MainHeader from './MainHeader'
import Pro from './Pro'


const Home = () => {
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
                    {
                        jaze.map( (cuerpo) => {
                            return <Pro  nombre={cuerpo.id}/>
                        } )
                    }   
               </main>
           </div>
        </>
        
    )
}

export default Home;