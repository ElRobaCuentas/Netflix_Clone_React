import React, { useState } from 'react'
// import './styles/wrapper2.css'; //LLAMADA SIN MODULO
import styles from './styles/wrapper2.module.css' //LLAMADA CON MODULO
import NavBar from '../common/NavBar';

const Wrapper2 = (props) => {

    return (
        <>
            <div className={styles.container} id="container">
               <header className={styles.header}>
                   <div className={styles.navbar}>
                       <NavBar />
                   </div>
               </header>
               <main className={styles.main}>
                    {props.children}
               </main>
           </div>
            
        </>
    )
}

export default Wrapper2;
