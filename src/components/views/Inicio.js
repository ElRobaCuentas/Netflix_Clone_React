import React, { useEffect, useState } from 'react'
import MainHeader from '../inicio/MainHeader'
import Menu from '../inicio/Menu'
import Pro from '../inicio/Pro'
import './styles/inicio.css'


const Inicio = () => {
    // https://jsonplaceholder.typicode.com/posts

    let urlFirst = "https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSNz30oKaAJz_6xphr5YmOwQb21u0ct3QjEiHVKdPDVeuV5D3JEMarTffXqObImvAKiY73h69G0VbibmPmkserMd_TF0.webp?r=907%22,%20%22img_titulo_pelicula%22:%20%22https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYV8jny04PjLGYENY_6h-jkOLUZr4T0rN5PRlSYBIhzOCu4iXjT5zdJdDmLTxltkYc_ihzdw-nB3g61pc2nLL-4I6fcUzXq1zJbP.webp?r=982"

    const [jaze, setJaze] = useState([])
    const [response, setResponse] = useState()
    const [background, setBackground] = useState(urlFirst)

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
    let tagContainer = document.getElementById("contenedor")
    tagContainer && (tagContainer.style.backgroundImage = `url(${background})`);

    return (
        <>
           <div className="container" id="contenedor">
               <header className="header">
                   <div className="menu">
                       <Menu />
                   </div>
                   <div className="main_header">
                       <MainHeader  dato={response} setBack={setBackground} />
                   </div>
               </header>
               <main className="main">
                    {
                        jaze.map( (cuerpo) => {
                            return <Pro nombre={cuerpo.id} />
                        } )
                    }   
               </main>
           </div>
        </>
        
    )
}

export default Inicio;