import React from 'react'
import Menu from '../views/inicio/Menu'
import './styles/wrapper-two.css'

const WrapperTwo = (props) => {
    return (
        <>
            <div className="container-two">
               <header className="header-two">
                   <div className="menu-two">
                       <Menu  />
                   </div>
               </header>
               <main>
                   {props.children}
               </main>
           </div>
        </>
    )
}

export default WrapperTwo
