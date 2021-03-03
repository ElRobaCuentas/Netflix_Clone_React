import React from 'react'
import MainHeader from '../views/inicio/MainHeader';
import Menu from '../views/inicio/Menu';
import './styles/wrapper.css'

const Wrapper = (props) => {
    return (
        <>
           <div className="container">
               <header className="header">
                   <div className="menu">
                       <Menu  />
                   </div>
                   <div className="main_header">
                       <MainHeader  dato={props.dato}/>
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
// console.log("aca estaaaa", response)
