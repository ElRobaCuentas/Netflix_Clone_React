import React from 'react'
import './home.css'
import Menu from './Menu'
import MainHeader from './MainHeader'


const Home = () => {
    return (
        <>
           <div className="container">
               <header className="header">
                   <div className="menu">
                       <Menu />
                   </div>
                   <div className="main_header">
                       <MainHeader />
                   </div>
               </header>
               <main className="main">
                   
               </main>
           </div>
        </>
        
    )
}

export default Home;