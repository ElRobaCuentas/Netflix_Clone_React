import React from 'react'
import Menu from './inicio/Menu';

const Peliculas = () => {
    return (
        <div>
            <div className="container">
               <header className="header">
                   <div className="menu">
                       <Menu />
                   </div>
                   <div className="main_header">
                       {/* <MainHeader  dato={response}/> */}
                   </div>
               </header>
               <main className="main">
                  
               </main>
           </div>
        </div>
    )
}

export default Peliculas;
