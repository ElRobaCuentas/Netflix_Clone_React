import React, { useState } from 'react'
import './styles/wrapper.css';
import NavBar from '../common/NavBar';
import MainHeader from '../common/MainHeader';

const Wrapper = (props) => {

    let urlFirst = "https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSNz30oKaAJz_6xphr5YmOwQb21u0ct3QjEiHVKdPDVeuV5D3JEMarTffXqObImvAKiY73h69G0VbibmPmkserMd_TF0.webp?r=907%22,%20%22img_titulo_pelicula%22:%20%22https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYV8jny04PjLGYENY_6h-jkOLUZr4T0rN5PRlSYBIhzOCu4iXjT5zdJdDmLTxltkYc_ihzdw-nB3g61pc2nLL-4I6fcUzXq1zJbP.webp?r=982"

    const [background, setbackground] = useState(urlFirst)

    let tagContainer = document.getElementById("container")
    tagContainer && (tagContainer.style.backgroundImage = `url(${background})`);

    return (
        <>
            <div className="container" id="container">
               <header className="header">
                   <div className="menu">
                       <NavBar />

                   </div>
                   <div className="main_header">
                       <MainHeader 
                            data={props.data}
                            setFondo={setbackground}
                        />
                   </div>
               </header>
               <main className="main">
                    {props.children}
               </main>
           </div>
            
        </>
    )
}

export default Wrapper;
