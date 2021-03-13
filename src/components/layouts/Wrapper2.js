import React, { useState } from 'react'
import './styles/wrapper2.css';
import NavBar from '../common/NavBar';
// import MainHeader from '../common/MainHeader';

const Wrapper = (props) => {

    return (
        <>
            <div className="container-wrapper2" id="container">
               <header className="header-wrapper2">
                   <div className="menu-wrapper2">
                       <NavBar />
                   </div>
               </header>
               <main className="main-wrapper2">
                    {props.children}
               </main>
           </div>
            
        </>
    )
}

export default Wrapper;
